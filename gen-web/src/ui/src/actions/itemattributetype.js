/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, postRequest, putRequest} from "../utils/authority";

export const ITEMATTRIBUTETYPE_FETCH_SUCCESS = 'ITEMATTRIBUTETYPE_FETCH_SUCCESS';
export function itemAttributeTypeFetchSuccess(itemAttributeType){
    console.log('DISPATCHING SUCCESS', itemAttributeType );
    return {
        type: ITEMATTRIBUTETYPE_FETCH_SUCCESS,
        itemAttributeType: itemAttributeType
    }
}

export const ITEMATTRIBUTETYPE_FETCH_ERROR = 'ITEMATTRIBUTETYPE_FETCH_ERROR';
export function itemAttributeTypeFetchError(error){
    return {
        type: ITEMATTRIBUTETYPE_FETCH_ERROR,
        error: error
    }
}

export function fetchItemAttributeType(url, parentItemTypeId){
    console.log('Fetch of single itemAttributeType Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemAttributeTypeFetchSuccess(data))
            data.itemTypeByItemTypeId = {itemTypeId: parentItemTypeId}
        }catch (e) {
            dispatch(itemAttributeTypeFetchError(true))
        }   
    }
}

export const ITEMATTRIBUTETYPE_EDIT = 'ITEMATTRIBUTETYPE_EDIT';
export function editItemAttributeType(name, value){
    return {
        type: ITEMATTRIBUTETYPE_EDIT,
        name,
        value
    }
}

export const ITEMATTRIBUTETYPE_SAVE_SUCCESS = 'ITEMATTRIBUTETYPE_SAVE_SUCCESS';
export function saveItemAttributeTypeSuccess(itemAttributeType){
    return {
        type: ITEMATTRIBUTETYPE_SAVE_SUCCESS,
        itemAttributeType: itemAttributeType
    }
}

export const ITEMATTRIBUTETYPE_SAVE_ERROR = 'ITEMATTRIBUTETYPE_SAVE_ERROR';
export function saveItemAttributeTypeError(error){
    return {
        type: ITEMATTRIBUTETYPE_SAVE_ERROR,
        error
    }
}

export function saveItemAttributeType(url, itemAttributeType){
    return async dispatch => {
        try {
            let data = null;
            //itemAttributeType.itemAttrTypeDatatype = {itemAttrTypeDatatypeCode: 1}
            if(itemAttributeType.itemAttrTypeId) {
                data = await putRequest(url, itemAttributeType)
            }else{
                data = await postRequest(url, itemAttributeType)
            }
            dispatch(saveItemAttributeTypeSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMATTRIBUTETYPES_FETCH_SUCCESS = 'ITEMATTRIBUTETYPES_FETCH_SUCCESS';
export function itemAttributeTypesFetchSuccess(itemAttributeTypes, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', itemAttributeTypes );
    return {
        type: ITEMATTRIBUTETYPES_FETCH_SUCCESS,
        itemAttributeTypes: itemAttributeTypes,
        totalRecords,
        lastPage,
        first
    }
}

export const ITEMATTRIBUTETYPES_FETCH_ERROR = 'ITEMATTRIBUTETYPES_FETCH_ERROR';
export function itemAttributeTypesFetchError(error){
    return {
        type: ITEMATTRIBUTETYPES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllItemAttributeTypes(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(itemAttributeTypesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(itemAttributeTypesFetchError(true))
        }
    }
}