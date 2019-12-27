/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, postRequest, putRequest} from "../utils/authority";

export const RELATIONSHIPMAPPING_FETCH_SUCCESS = 'RELATIONSHIPMAPPING_FETCH_SUCCESS';
export function relationshipMappingFetchSuccess(relationshipMapping){
    console.log('DISPATCHING SUCCESSx', relationshipMapping );
    return {
        type: RELATIONSHIPMAPPING_FETCH_SUCCESS,
        relationshipMapping: relationshipMapping
    }
}

export const RELATIONSHIPMAPPING_FETCH_ERROR = 'RELATIONSHIPMAPPING_FETCH_ERROR';
export function relationshipMappingFetchError(error){
    return {
        type: RELATIONSHIPMAPPING_FETCH_ERROR,
        error: error
    }
}

export function fetchRelationshipMapping(url){
    console.log('Fetch of single relationshipMapping Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(relationshipMappingFetchSuccess(data))
        }catch (e) {
            dispatch(relationshipMappingFetchError(true))
        }   
    }
}

export const RELATIONSHIPMAPPING_EDIT = 'RELATIONSHIPMAPPING_EDIT';
export function editRelationshipMapping(name, value){    
    return {
        type: RELATIONSHIPMAPPING_EDIT,
        name,
        value
    }
}

export const RELATIONSHIPMAPPING_SAVE_SUCCESS = 'RELATIONSHIPMAPPING_SAVE_SUCCESS';
export function saveRelationshipMappingSuccess(relationshipMapping){
    return {
        type: RELATIONSHIPMAPPING_SAVE_SUCCESS,
        relationshipMapping: relationshipMapping
    }
}

export const RELATIONSHIPMAPPING_SAVE_ERROR = 'RELATIONSHIPMAPPING_SAVE_ERROR';
export function saveRelationshipMappingError(error){
    return {
        type: RELATIONSHIPMAPPING_SAVE_ERROR,
        error
    }
}

export function saveRelationshipMapping(url, relationshipMapping){
    return async dispatch => {
        try {

            const data = await postRequest(url, relationshipMapping)
            dispatch(saveRelationshipMappingSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const RELATIONSHIPMAPPINGS_FETCH_SUCCESS = 'RELATIONSHIPMAPPINGS_FETCH_SUCCESS';
export function relationshipMappingsFetchSuccess(relationshipMappings, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', relationshipMappings );
    return {
        type: RELATIONSHIPMAPPINGS_FETCH_SUCCESS,
        relationshipMappings: relationshipMappings,
        totalRecords,
        lastPage,
        first
    }
}

export const RELATIONSHIPMAPPINGS_FETCH_ERROR = 'RELATIONSHIPMAPPINGS_FETCH_ERROR';
export function relationshipMappingsFetchError(error){
    return {
        type: RELATIONSHIPMAPPINGS_FETCH_ERROR,
        error: error
    }
}

export function fetchAllRelationshipMappings(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(relationshipMappingsFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(relationshipMappingsFetchError(true))
        }
    }
}