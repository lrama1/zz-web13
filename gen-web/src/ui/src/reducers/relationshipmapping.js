
import {RELATIONSHIPMAPPING_FETCH_SUCCESS , RELATIONSHIPMAPPING_EDIT, RELATIONSHIPMAPPING_SAVE_SUCCESS, RELATIONSHIPMAPPING_SAVE_ERROR} from '../actions/relationshipmapping'

const initialRelationshipMappings = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const relationshipMappings = (state = initialRelationshipMappings, action) => {
    if(action.type === 'RELATIONSHIPMAPPINGS_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.relationshipMappings,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialRelationshipMapping = {
        relId: ''    
        ,relTypeId: ''
        ,relName: ''
        ,sourceItemId: ''
        ,targetItemId: ''
    }

export const relationshipMapping = (state = initialRelationshipMapping, action) => {
    if (action.type === RELATIONSHIPMAPPING_FETCH_SUCCESS){
        //return action.relationshipMapping
        console.log('BLAAA',action.relationshipMapping)
        //relTypeId: action.relationshipMapping.relationshipType.relTypeId
        const relTypeId = action.relationshipMapping.relationship.relationshipType?
            action.relationshipMapping.relationship.relationshipType.relTypeId: null
        const newState = {
            ...action.relationshipMapping.id,
            relTypeId: relTypeId
        }
        console.log('GGG', newState)
        return newState;
        
    }else if(action.type === RELATIONSHIPMAPPING_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === RELATIONSHIPMAPPING_SAVE_SUCCESS){
        return action.relationshipMapping;
    }else if(action.type === RELATIONSHIPMAPPING_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
