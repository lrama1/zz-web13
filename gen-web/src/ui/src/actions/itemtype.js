/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, postRequest, putRequest} from "../utils/authority";

export const ITEMTYPE_FETCH_SUCCESS = 'ITEMTYPE_FETCH_SUCCESS';
export function itemTypeFetchSuccess(itemType){
    console.log('DISPATCHING SUCCESS', itemType );
    return {
        type: ITEMTYPE_FETCH_SUCCESS,
        itemType: itemType
    }
}

export const ITEMTYPE_FETCH_ERROR = 'ITEMTYPE_FETCH_ERROR';
export function itemTypeFetchError(error){
    return {
        type: ITEMTYPE_FETCH_ERROR,
        error: error
    }
}

export function fetchItemType(url){
    console.log('Fetch of single itemType Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemTypeFetchSuccess(data))
        }catch (e) {
            dispatch(itemTypeFetchError(true))
        }   
    }
}

export const ITEMTYPE_EDIT = 'ITEMTYPE_EDIT';
export function editItemType(name, value){    
    return {
        type: ITEMTYPE_EDIT,
        name,
        value
    }
}

export const ITEMTYPE_SAVE_SUCCESS = 'ITEMTYPE_SAVE_SUCCESS';
export function saveItemTypeSuccess(itemType){
    return {
        type: ITEMTYPE_SAVE_SUCCESS,
        itemType: itemType
    }
}

export const ITEMTYPE_SAVE_ERROR = 'ITEMTYPE_SAVE_ERROR';
export function saveItemTypeError(error){
    return {
        type: ITEMTYPE_SAVE_ERROR,
        error
    }
}

export function saveItemType(url, itemType){
    return async dispatch => {
        try {
            let data = null;
            if(itemType.itemTypeId === ''){
                data = await postRequest(url, itemType)
            }else {
                data = await putRequest(url, itemType)
            }
            dispatch(saveItemTypeSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMTYPES_FETCH_SUCCESS = 'ITEMTYPES_FETCH_SUCCESS';
export function itemTypesFetchSuccess(itemTypes, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', itemTypes );
    return {
        type: ITEMTYPES_FETCH_SUCCESS,
        itemTypes: itemTypes,
        totalRecords,
        lastPage,
        first
    }
}

export const ITEMTYPES_FETCH_ERROR = 'ITEMTYPES_FETCH_ERROR';
export function itemTypesFetchError(error){
    return {
        type: ITEMTYPES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllItemTypes(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(itemTypesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(itemTypesFetchError(true))
        }
    }
}