
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
        ,itemType: {
            itemAttributeTypesForItemTypeId : []
        }
        ,relationshipMappingsForSourceItemId: []

    }

export const item = (state = initialItem, action) => {
    if (action.type === ITEM_FETCH_SUCCESS){
        return action.item
        
    }else if(action.type === ITEM_EDIT){
        let newState = {}
        if(action.name[0].indexOf('.') == -1) {
            newState = {
                ...state,
                [action.name]: action.value
            }
        }else{
            const names = action.name[0].split(".");
            newState = {
                ...state
            }
            newState[names[0]][names[1]] = action.value;
        }
        console.log('Change', newState)
        return newState;

    }else if(action.type === ITEM_SAVE_SUCCESS){
        return action.item;
    }else if(action.type === ITEM_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
