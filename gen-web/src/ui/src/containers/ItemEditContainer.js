import {connect} from 'react-redux';
import {editItem, saveItem} from '../actions/item';
import ItemEdit from '../components/ItemEdit';

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
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemEdit);