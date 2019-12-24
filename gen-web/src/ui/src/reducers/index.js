import {combineReducers} from 'redux'
import { items, item } from './item';
import { itemTypes, itemType } from './itemtype';
import { itemAttributeTypes, itemAttributeType } from './itemattributetype';
import { itemAttrTypeDatatypes, itemAttrTypeDatatype } from './itemattrtypedatatype';

/*
By combining reducers, you now have to use the namespace of the reducer
when mapping State-to-Props in your components
 */
export default combineReducers({
    item,
    items,
    itemType,
    itemTypes,
    itemAttributeType,
    itemAttributeTypes,
    itemAttrTypeDatatype,
    itemAttrTypeDatatypes
});

 