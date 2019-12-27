import {connect} from 'react-redux';
import {editItem, saveItem} from '../actions/item';
import ItemEdit from '../components/ItemEdit';
import {fetchItemAttribute} from "../actions/itemattribute";
import {fetchRelationshipMapping} from "../actions/relationshipmapping";

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItem: state.item,
        itemTypes: state.itemTypes
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItem(event){
            const {name, value} = event.target;
            dispatch(editItem([name], value))
        },
        onSaveItem(url, item){
            dispatch(saveItem(url, item))
        },
        fetchItemAttribute(url){
            dispatch(fetchItemAttribute(url))
        },
        fetchRelationshipMapping(url){
            dispatch(fetchRelationshipMapping(url))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemEdit);