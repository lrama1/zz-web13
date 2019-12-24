import {connect} from 'react-redux';
import {editItemAttributeType, saveItemAttributeType} from '../actions/itemattributetype';
import ItemAttributeTypeEdit from '../components/ItemAttributeTypeEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemAttributeType: state.itemAttributeType
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemAttributeType(event){
            const {name, value} = event.target;
            dispatch(editItemAttributeType([name], value))
        },
        onSaveItemAttributeType(url, itemAttributeType){
            dispatch(saveItemAttributeType(url, itemAttributeType))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemAttributeTypeEdit);