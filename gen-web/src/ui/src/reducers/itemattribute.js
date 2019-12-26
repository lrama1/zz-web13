
import {ITEMATTRIBUTE_FETCH_SUCCESS , ITEMATTRIBUTE_EDIT, ITEMATTRIBUTE_SAVE_SUCCESS, ITEMATTRIBUTE_SAVE_ERROR} from '../actions/itemattribute'

const initialItemAttributes = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const itemAttributes = (state = initialItemAttributes, action) => {
    if(action.type === 'ITEMATTRIBUTES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.itemAttributes,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialItemAttribute = {
        itemAttrId: ''    
            ,itemAttrValue: ''    
    }

export const itemAttribute = (state = initialItemAttribute, action) => {
    if (action.type === ITEMATTRIBUTE_FETCH_SUCCESS){
        return action.itemAttribute
        
    }else if(action.type === ITEMATTRIBUTE_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === ITEMATTRIBUTE_SAVE_SUCCESS){
        return action.itemAttribute;
    }else if(action.type === ITEMATTRIBUTE_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
