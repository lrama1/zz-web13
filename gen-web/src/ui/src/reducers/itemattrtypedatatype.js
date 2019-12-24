
import {ITEMATTRTYPEDATATYPE_FETCH_SUCCESS , ITEMATTRTYPEDATATYPE_EDIT, ITEMATTRTYPEDATATYPE_SAVE_SUCCESS, ITEMATTRTYPEDATATYPE_SAVE_ERROR} from '../actions/itemattrtypedatatype'

const initialItemAttrTypeDatatypes = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const itemAttrTypeDatatypes = (state = initialItemAttrTypeDatatypes, action) => {
    if(action.type === 'ITEMATTRTYPEDATATYPES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.itemAttrTypeDatatypes,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialItemAttrTypeDatatype = {
        itemAttrTypeDatatypeCode: ''    
            ,itemAttrTypeDatatypeName: ''    
            ,itemAttrTypeDatatypeDesc: ''    
            ,regexPattern: ''    
    }

export const itemAttrTypeDatatype = (state = initialItemAttrTypeDatatype, action) => {
    if (action.type === ITEMATTRTYPEDATATYPE_FETCH_SUCCESS){
        return action.itemAttrTypeDatatype
        
    }else if(action.type === ITEMATTRTYPEDATATYPE_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === ITEMATTRTYPEDATATYPE_SAVE_SUCCESS){
        return action.itemAttrTypeDatatype;
    }else if(action.type === ITEMATTRTYPEDATATYPE_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
