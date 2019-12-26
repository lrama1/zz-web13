/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, postRequest, putRequest} from "../utils/authority";

export const ITEMATTRIBUTE_FETCH_SUCCESS = 'ITEMATTRIBUTE_FETCH_SUCCESS';
export function itemAttributeFetchSuccess(itemAttribute){
    console.log('DISPATCHING SUCCESS', itemAttribute );
    return {
        type: ITEMATTRIBUTE_FETCH_SUCCESS,
        itemAttribute: itemAttribute
    }
}

export const ITEMATTRIBUTE_FETCH_ERROR = 'ITEMATTRIBUTE_FETCH_ERROR';
export function itemAttributeFetchError(error){
    return {
        type: ITEMATTRIBUTE_FETCH_ERROR,
        error: error
    }
}

export function fetchItemAttribute(url){
    console.log('Fetch of single itemAttribute Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemAttributeFetchSuccess(data))
        }catch (e) {
            dispatch(itemAttributeFetchError(true))
        }   
    }
}

export const ITEMATTRIBUTE_EDIT = 'ITEMATTRIBUTE_EDIT';
export function editItemAttribute(name, value){    
    return {
        type: ITEMATTRIBUTE_EDIT,
        name,
        value
    }
}

export const ITEMATTRIBUTE_SAVE_SUCCESS = 'ITEMATTRIBUTE_SAVE_SUCCESS';
export function saveItemAttributeSuccess(itemAttribute){
    return {
        type: ITEMATTRIBUTE_SAVE_SUCCESS,
        itemAttribute: itemAttribute
    }
}

export const ITEMATTRIBUTE_SAVE_ERROR = 'ITEMATTRIBUTE_SAVE_ERROR';
export function saveItemAttributeError(error){
    return {
        type: ITEMATTRIBUTE_SAVE_ERROR,
        error
    }
}

export function saveItemAttribute(url, itemAttribute){
    return async dispatch => {
        try {
            let data = null;
            if(itemAttribute.itemAttrId) {
                data = await putRequest(url, itemAttribute)
            }else{
                data = await postRequest(url, itemAttribute)
            }
            dispatch(saveItemAttributeSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMATTRIBUTES_FETCH_SUCCESS = 'ITEMATTRIBUTES_FETCH_SUCCESS';
export function itemAttributesFetchSuccess(itemAttributes, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', itemAttributes );
    return {
        type: ITEMATTRIBUTES_FETCH_SUCCESS,
        itemAttributes: itemAttributes,
        totalRecords,
        lastPage,
        first
    }
}

export const ITEMATTRIBUTES_FETCH_ERROR = 'ITEMATTRIBUTES_FETCH_ERROR';
export function itemAttributesFetchError(error){
    return {
        type: ITEMATTRIBUTES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllItemAttributes(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(itemAttributesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(itemAttributesFetchError(true))
        }
    }
}