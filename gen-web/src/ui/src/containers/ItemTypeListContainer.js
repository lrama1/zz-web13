
import {connect} from 'react-redux';
import ItemTypeList from '../components/ItemTypeList'
import {fetchItemType, fetchAllItemTypes} from '../actions/itemtype';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        itemTypes: state.itemTypes.records,
        totalRecords: state.itemTypes.totalRecords,
        first: state.itemTypes.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItemType(url){
            dispatch(fetchItemType(url))
        },
        fetchAllItemTypes(url, first){
            dispatch(fetchAllItemTypes(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTypeList);