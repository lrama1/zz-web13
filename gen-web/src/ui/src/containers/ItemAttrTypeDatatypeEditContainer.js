import {connect} from 'react-redux';
import {editItemAttrTypeDatatype, saveItemAttrTypeDatatype} from '../actions/itemattrtypedatatype';
import ItemAttrTypeDatatypeEdit from '../components/ItemAttrTypeDatatypeEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItemAttrTypeDatatype: state.itemAttrTypeDatatype
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditItemAttrTypeDatatype(event){
            const {name, value} = event.target;
            dispatch(editItemAttrTypeDatatype([name], value))
        },
        onSaveItemAttrTypeDatatype(url, itemAttrTypeDatatype){
            dispatch(saveItemAttrTypeDatatype(url, itemAttrTypeDatatype))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ItemAttrTypeDatatypeEdit);