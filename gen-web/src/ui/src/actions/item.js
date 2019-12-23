/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, putRequest} from "../utils/authority";

export const ITEM_FETCH_SUCCESS = 'ITEM_FETCH_SUCCESS';
export function itemFetchSuccess(item){
    console.log('DISPATCHING SUCCESS', item );
    return {
        type: ITEM_FETCH_SUCCESS,
        item: item
    }
}

export const ITEM_FETCH_ERROR = 'ITEM_FETCH_ERROR';
export function itemFetchError(error){
    return {
        type: ITEM_FETCH_ERROR,
        error: error
    }
}

export function fetchItem(url){
    console.log('Fetch of single item Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemFetchSuccess(data))
        }catch (e) {
            dispatch(itemFetchError(true))
        }   
    }
}

export const ITEM_EDIT = 'ITEM_EDIT';
export function editItem(name, value){    
    return {
        type: ITEM_EDIT,
        name,
        value
    }
}

export const ITEM_SAVE_SUCCESS = 'ITEM_SAVE_SUCCESS';
export function saveItemSuccess(item){
    return {
        type: ITEM_SAVE_SUCCESS,
        item: item
    }
}

export const ITEM_SAVE_ERROR = 'ITEM_SAVE_ERROR';
export function saveItemError(error){
    return {
        type: ITEM_SAVE_ERROR,
        error
    }
}

export function saveItem(url, item){
    return async dispatch => {
        try {
            const data = await putRequest(url, item)
            dispatch(saveItemSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS';
export function itemsFetchSuccess(items, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', items );
    return {
        type: ITEMS_FETCH_SUCCESS,
        items: items,
        totalRecords,
        lastPage,
        first
    }
}

export const ITEMS_FETCH_ERROR = 'ITEMS_FETCH_ERROR';
export function itemsFetchError(error){
    return {
        type: ITEMS_FETCH_ERROR,
        error: error
    }
}

export function fetchAllItems(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(itemsFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(itemsFetchError(true))
        }
    }
}