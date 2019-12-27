/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, putRequest} from "../utils/authority";

export const RELATIONSHIP_FETCH_SUCCESS = 'RELATIONSHIP_FETCH_SUCCESS';
export function relationshipFetchSuccess(relationship){
    console.log('DISPATCHING SUCCESS', relationship );
    return {
        type: RELATIONSHIP_FETCH_SUCCESS,
        relationship: relationship
    }
}

export const RELATIONSHIP_FETCH_ERROR = 'RELATIONSHIP_FETCH_ERROR';
export function relationshipFetchError(error){
    return {
        type: RELATIONSHIP_FETCH_ERROR,
        error: error
    }
}

export function fetchRelationship(url){
    console.log('Fetch of single relationship Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(relationshipFetchSuccess(data))
        }catch (e) {
            dispatch(relationshipFetchError(true))
        }   
    }
}

export const RELATIONSHIP_EDIT = 'RELATIONSHIP_EDIT';
export function editRelationship(name, value){    
    return {
        type: RELATIONSHIP_EDIT,
        name,
        value
    }
}

export const RELATIONSHIP_SAVE_SUCCESS = 'RELATIONSHIP_SAVE_SUCCESS';
export function saveRelationshipSuccess(relationship){
    return {
        type: RELATIONSHIP_SAVE_SUCCESS,
        relationship: relationship
    }
}

export const RELATIONSHIP_SAVE_ERROR = 'RELATIONSHIP_SAVE_ERROR';
export function saveRelationshipError(error){
    return {
        type: RELATIONSHIP_SAVE_ERROR,
        error
    }
}

export function saveRelationship(url, relationship){
    return async dispatch => {
        try {
            const data = await putRequest(url, relationship)
            dispatch(saveRelationshipSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const RELATIONSHIPS_FETCH_SUCCESS = 'RELATIONSHIPS_FETCH_SUCCESS';
export function relationshipsFetchSuccess(relationships, totalRecords, lastPage, first){
    console.log('DISPATCHING SUCCESS', relationships );
    return {
        type: RELATIONSHIPS_FETCH_SUCCESS,
        relationships: relationships,
        totalRecords,
        lastPage,
        first
    }
}

export const RELATIONSHIPS_FETCH_ERROR = 'RELATIONSHIPS_FETCH_ERROR';
export function relationshipsFetchError(error){
    return {
        type: RELATIONSHIPS_FETCH_ERROR,
        error: error
    }
}

export function fetchAllRelationships(url, first){
    console.log('Fetch Invoked');
    return async dispatch => {
        try {
            const data = await getRequest(url);
            dispatch(relationshipsFetchSuccess(data.rows, data.totalRecords, data.lastPage, first))
        }catch (e) {
            dispatch(relationshipsFetchError(true))
        }
    }
}