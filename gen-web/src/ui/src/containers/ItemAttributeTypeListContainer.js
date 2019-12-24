
import {connect} from 'react-redux';
import ItemAttributeTypeList from '../components/ItemAttributeTypeList'
import {fetchItemAttributeType, fetchAllItemAttributeTypes} from '../actions/itemattributetype';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        itemAttributeTypes: state.itemAttributeTypes.records,
        totalRecords: state.itemAttributeTypes.totalRecords,
        first: state.itemAttributeTypes.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItemAttributeType(url){
            dispatch(fetchItemAttributeType(url))
        },
        fetchAllItemAttributeTypes(url, first){
            dispatch(fetchAllItemAttributeTypes(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAttributeTypeList);