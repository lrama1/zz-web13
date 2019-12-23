
import {ITEM_FETCH_SUCCESS , ITEM_EDIT, ITEM_SAVE_SUCCESS, ITEM_SAVE_ERROR} from '../actions/item'

const initialItems = {
     records: [],
     totalRecords: 0,
     first: 0        
} 

export const items = (state = initialItems, action) => {
    if(action.type === 'ITEMS_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.items,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialItem = {
        itemId: ''    
            ,itemCode: ''    
            ,itemName: ''    
    }

export const item = (state = initialItem, action) => {
    if (action.type === ITEM_FETCH_SUCCESS){
        return action.item
        
    }else if(action.type === ITEM_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === ITEM_SAVE_SUCCESS){
        return action.item;
    }else if(action.type === ITEM_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
