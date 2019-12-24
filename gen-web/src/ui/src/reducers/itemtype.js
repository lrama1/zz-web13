import {ITEMTYPE_FETCH_SUCCESS, ITEMTYPE_EDIT, ITEMTYPE_SAVE_SUCCESS, ITEMTYPE_SAVE_ERROR} from '../actions/itemtype'

const initialItemTypes = {
    records: [],
    totalRecords: 0,
    first: 0
}

export const itemTypes = (state = initialItemTypes, action) => {
    if (action.type === 'ITEMTYPES_FETCH_SUCCESS') {
        return {
            ...state,
            records: action.itemTypes,
            totalRecords: action.totalRecords,
            first: action.first
        }
    }
    return state;
}

const initialItemType = {
    itemTypeId: '',
    itemTypeName: '',
    itemAttributeTypesForItemTypeId: []
}

export const itemType = (state = initialItemType, action) => {
    if (action.type === ITEMTYPE_FETCH_SUCCESS) {
        return action.itemType

    } else if (action.type === ITEMTYPE_EDIT) {
        return {
            ...state,
            [action.name]: action.value
        }
    } else if (action.type === ITEMTYPE_SAVE_SUCCESS) {
        return action.itemType;
    } else if (action.type === ITEMTYPE_SAVE_ERROR) {
        alert(action.error)
        return state;
    }
    return state;
}
