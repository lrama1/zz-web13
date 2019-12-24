
import {ITEMATTRIBUTETYPE_FETCH_SUCCESS , ITEMATTRIBUTETYPE_EDIT, ITEMATTRIBUTETYPE_SAVE_SUCCESS, ITEMATTRIBUTETYPE_SAVE_ERROR} from '../actions/itemattributetype'

const initialItemAttributeTypes = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const itemAttributeTypes = (state = initialItemAttributeTypes, action) => {
    if(action.type === 'ITEMATTRIBUTETYPES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.itemAttributeTypes,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialItemAttributeType = {
        "itemAttrTypeId":"",
        "itemTypeByItemAttrTypeLookupListId":{},
        "itemAttrTypeDatatype":{itemAttrTypeDatatypeCode: 1},
        "itemTypeByItemTypeId":null,
        "itemAttrTypeCode":"",
        "itemAttrTypeName":"",
        "itemAttrTypeDesc":null,
        "itemAttrTypeLength":null,
        "itemAttrTypeIssearchable":null,
        "itemAttrTypeDisplayIndex":null,
        "itemAttrTypeIsRequired":null
    }

export const itemAttributeType = (state = initialItemAttributeType, action) => {
    if (action.type === ITEMATTRIBUTETYPE_FETCH_SUCCESS){
        return action.itemAttributeType
        
    }else if(action.type === ITEMATTRIBUTETYPE_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === ITEMATTRIBUTETYPE_SAVE_SUCCESS){
        return action.itemAttributeType;
    }else if(action.type === ITEMATTRIBUTETYPE_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
