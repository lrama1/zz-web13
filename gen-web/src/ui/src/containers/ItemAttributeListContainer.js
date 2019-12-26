
import {connect} from 'react-redux';
import ItemAttributeList from '../components/ItemAttributeList'
import {fetchItemAttribute, fetchAllItemAttributes} from '../actions/itemattribute';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        itemAttributes: state.itemAttributes.records,
        totalRecords: state.itemAttributes.totalRecords,
        first: state.itemAttributes.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItemAttribute(url){
            dispatch(fetchItemAttribute(url))
        },
        fetchAllItemAttributes(url, first){
            dispatch(fetchAllItemAttributes(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAttributeList);