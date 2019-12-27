/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, postRequest, putRequest} from "../utils/authority";

export const RELATIONSHIPTYPE_FETCH_SUCCESS = 'RELATIONSHIPTYPE_FETCH_SUCCESS';
export function relationshipTypeFetchSuccess(relationshipType){
    console.log('DISPATCHING SUCCESS', relationshipType );
    return {
        type: RELATIONSHIPTYPE_FETCH_SUCCESS,
        relationshipType: relationshipType
    }
}

export const RELATIONSHIPTYPE_FETCH_ERROR = 'RELATIONSHIPTYPE_FETCH_ERROR';
export function relationshipTypeFetchError(error){
    return {
        type: RELATIONSHIPTYPE_FETCH_ERROR,
        error: error
    }
}

export function fetchRelationshipType(url){
    console.log('Fetch of single relationshipType Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(relationshipTypeFetchSuccess(data))
        }catch (e) {
            dispatch(relationshipTypeFetchError(true))
        }   
    }
}

export const RELATIONSHIPTYPE_EDIT = 'RELATIONSHIPTYPE_EDIT';
export function editRelationshipType(name, value){    
    return {
        type: RELATIONSHIPTYPE_EDIT,
        name,
        value
    }
}

export const RELATIONSHIPTYPE_SAVE_SUCCESS = 'RELATIONSHIPTYPE_SAVE_SUCCESS';
export function saveRelationshipTypeSuccess(relationshipType){
    return {
        type: RELATIONSHIPTYPE_SAVE_SUCCESS,
        relationshipType: relationshipType
    }
}

export const RELATIONSHIPTYPE_SAVE_ERROR = 'RELATIONSHIPTYPE_SAVE_ERROR';
export function saveRelationshipTypeError(error){
    return {
        type: RELATIONSHIPTYPE_SAVE_ERROR,
        error
    }
}

export function saveRelationshipType(url, relationshipType){
    return async dispatch => {
        try {
            let data = null;
            if(relationshipType.relTypeId)
              data = await putRequest(url, relationshipType)
            else
                data = await postRequest(url, relationshipType)
            dispatch(saveRelationshipTypeSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const RELATIONSHIPTYPES_FETCH_SUCCESS = 'RELATIONSHIPTYPES_FETCH_SUCCESS';
export function relationshipTypesFetchSuccess(relationshipTypes, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', relationshipTypes );
    return {
        type: RELATIONSHIPTYPES_FETCH_SUCCESS,
        relationshipTypes: relationshipTypes,
        totalRecords,
        lastPage,
        first
    }
}

export const RELATIONSHIPTYPES_FETCH_ERROR = 'RELATIONSHIPTYPES_FETCH_ERROR';
export function relationshipTypesFetchError(error){
    return {
        type: RELATIONSHIPTYPES_FETCH_ERROR,
        error: error
    }
}

export function fetchAllRelationshipTypes(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(relationshipTypesFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(relationshipTypesFetchError(true))
        }
    }
}