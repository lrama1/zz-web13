import {connect} from 'react-redux';
import {editItemAttribute, saveItemAttribute} from '../actions/itemattribute';
import ItemAttributeEdit from '../components/ItemAttributeEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemAttribute: state.itemAttribute
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemAttribute(event){
            const {name, value} = event.target;
            dispatch(editItemAttribute([name], value))
        },
        onSaveItemAttribute(url, itemAttribute){
            dispatch(saveItemAttribute(url, itemAttribute))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemAttributeEdit);