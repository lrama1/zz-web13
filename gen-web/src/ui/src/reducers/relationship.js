
import {RELATIONSHIP_FETCH_SUCCESS , RELATIONSHIP_EDIT, RELATIONSHIP_SAVE_SUCCESS, RELATIONSHIP_SAVE_ERROR} from '../actions/relationship'

const initialRelationships = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const relationships = (state = initialRelationships, action) => {
    if(action.type === 'RELATIONSHIPS_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.relationships,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialRelationship = {
        relId: ''    
            ,relName: ''    
            ,relDesc: ''    
    }

export const relationship = (state = initialRelationship, action) => {
    if (action.type === RELATIONSHIP_FETCH_SUCCESS){
        return action.relationship
        
    }else if(action.type === RELATIONSHIP_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === RELATIONSHIP_SAVE_SUCCESS){
        return action.relationship;
    }else if(action.type === RELATIONSHIP_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
