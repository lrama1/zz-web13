
import {connect} from 'react-redux';
import RelationshipMappingList from '../components/RelationshipMappingList'
import {fetchRelationshipMapping, fetchAllRelationshipMappings} from '../actions/relationshipmapping';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        relationshipMappings: state.relationshipMappings.records,
        totalRecords: state.relationshipMappings.totalRecords,
        first: state.relationshipMappings.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchRelationshipMapping(url){
            dispatch(fetchRelationshipMapping(url))
        },
        fetchAllRelationshipMappings(url, first){
            dispatch(fetchAllRelationshipMappings(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelationshipMappingList);