
import {connect} from 'react-redux';
import RelationshipTypeList from '../components/RelationshipTypeList'
import {fetchRelationshipType, fetchAllRelationshipTypes} from '../actions/relationshiptype';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        relationshipTypes: state.relationshipTypes.records,
        totalRecords: state.relationshipTypes.totalRecords,
        first: state.relationshipTypes.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchRelationshipType(url){
            dispatch(fetchRelationshipType(url))
        },
        fetchAllRelationshipTypes(url, first){
            dispatch(fetchAllRelationshipTypes(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelationshipTypeList);