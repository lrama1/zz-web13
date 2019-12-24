
import {connect} from 'react-redux';
import ItemAttrTypeDatatypeList from '../components/ItemAttrTypeDatatypeList'
import {fetchItemAttrTypeDatatype, fetchAllItemAttrTypeDatatypes} from '../actions/itemattrtypedatatype';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        itemAttrTypeDatatypes: state.itemAttrTypeDatatypes.records,
        totalRecords: state.itemAttrTypeDatatypes.totalRecords,
        first: state.itemAttrTypeDatatypes.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItemAttrTypeDatatype(url){
            dispatch(fetchItemAttrTypeDatatype(url))
        },
        fetchAllItemAttrTypeDatatypes(url, first){
            dispatch(fetchAllItemAttrTypeDatatypes(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAttrTypeDatatypeList);