import {connect} from 'react-redux';
import {editItemType, saveItemType} from '../actions/itemtype';
import ItemTypeEdit from '../components/ItemTypeEdit';
import {fetchItemAttributeType} from "../actions/itemattributetype";

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemType: state.itemType
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemType(event){
            const {name, value} = event.target;
            dispatch(editItemType([name], value))
        },
        onSaveItemType(url, itemType){
            dispatch(saveItemType(url, itemType))
        },
        addNewItemAttributeType(parentItemTypeId){
            dispatch(fetchItemAttributeType('itemattributetype/-1', parentItemTypeId))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemTypeEdit);