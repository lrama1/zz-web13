
import {RELATIONSHIPTYPE_FETCH_SUCCESS , RELATIONSHIPTYPE_EDIT, RELATIONSHIPTYPE_SAVE_SUCCESS, RELATIONSHIPTYPE_SAVE_ERROR} from '../actions/relationshiptype'

const initialRelationshipTypes = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const relationshipTypes = (state = initialRelationshipTypes, action) => {
    if(action.type === 'RELATIONSHIPTYPES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.relationshipTypes,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialRelationshipType = {
        relTypeId: ''    
            ,relTypeCode: ''    
            ,relTypeName: ''    
            ,relTypeDesc: ''    
    }

export const relationshipType = (state = initialRelationshipType, action) => {
    if (action.type === RELATIONSHIPTYPE_FETCH_SUCCESS){
        return action.relationshipType
        
    }else if(action.type === RELATIONSHIPTYPE_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === RELATIONSHIPTYPE_SAVE_SUCCESS){
        return action.relationshipType;
    }else if(action.type === RELATIONSHIPTYPE_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
