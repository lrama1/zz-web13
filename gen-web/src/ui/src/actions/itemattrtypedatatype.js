/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, putRequest} from "../utils/authority";

export const ITEMATTRTYPEDATATYPE_FETCH_SUCCESS = 'ITEMATTRTYPEDATATYPE_FETCH_SUCCESS';
export function itemAttrTypeDatatypeFetchSuccess(itemAttrTypeDatatype){
    console.log('DISPATCHING SUCCESS', itemAttrTypeDatatype );
    return {
        type: ITEMATTRTYPEDATATYPE_FETCH_SUCCESS,
        itemAttrTypeDatatype: itemAttrTypeDatatype
    }
}

export const ITEMATTRTYPEDATATYPE_FETCH_ERROR = 'ITEMATTRTYPEDATATYPE_FETCH_ERROR';
export function itemAttrTypeDatatypeFetchError(error){
    return {
        type: ITEMATTRTYPEDATATYPE_FETCH_ERROR,
        error: error
    }
}

export function fetchItemAttrTypeDatatype(url){
    console.log('Fetch of single itemAttrTypeDatatype Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemAttrTypeDatatypeFetchSuccess(data))
        }catch (e) {
            dispatch(itemAttrTypeDatatypeFetchError(true))
        }   
    }
}

export const ITEMATTRTYPEDATATYPE_EDIT = 'ITEMATTRTYPEDATATYPE_EDIT';
export function editItemAttrTypeDatatype(name, value){    
    return {
        type: ITEMATTRTYPEDATATYPE_EDIT,
        name,
        value
    }
}

export const ITEMATTRTYPEDATATYPE_SAVE_SUCCESS = 'ITEMATTRTYPEDATATYPE_SAVE_SUCCESS';
export function saveItemAttrTypeDatatypeSuccess(itemAttrTypeDatatype){
    return {
        type: ITEMATTRTYPEDATATYPE_SAVE_SUCCESS,
        itemAttrTypeDatatype: itemAttrTypeDatatype
    }
}

export const ITEMATTRTYPEDATATYPE_SAVE_ERROR = 'ITEMATTRTYPEDATATYPE_SAVE_ERROR';
export function saveItemAttrTypeDatatypeError(error){
    return {
        type: ITEMATTRTYPEDATATYPE_SAVE_ERROR,
        error
    }
}

export function saveItemAttrTypeDatatype(url, itemAttrTypeDatatype){
    return async dispatch => {
        try {
            const data = await putRequest(url, itemAttrTypeDatatype)
            dispatch(saveItemAttrTypeDatatypeSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMATTRTYPEDATATYPES_FETCH_SUCCESS = 'ITEMATTRTYPEDATATYPES_FETCH_SUCCESS';
export function itemAttrTypeDatatypesFetchSuccess(itemAttrTypeDatatypes, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', itemAttrTypeDatatypes );
    return {
        type: ITEMATTRTYPEDATATYPES_FETCH_SUCCESS,
        itemAttrTypeDatatypes: itemAttrTypeDatatypes,
        totalRecords,
        lastPage,
        first
    }
}

export const ITEMATTRTYPEDATATYPES_FETCH_ERROR = 'ITEMATTRTYPEDATATYPES_FETCH_ERROR';
export function itemAttrTypeDatatypesFetchError(error){
    return {
        type: ITEMATTRTYPEDATATYPES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllItemAttrTypeDatatypes(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(itemAttrTypeDatatypesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(itemAttrTypeDatatypesFetchError(true))
        }
    }
}