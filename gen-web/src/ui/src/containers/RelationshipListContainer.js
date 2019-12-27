
import {connect} from 'react-redux';
import RelationshipList from '../components/RelationshipList'
import {fetchRelationship, fetchAllRelationships} from '../actions/relationship';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        relationships: state.relationships.records,
        totalRecords: state.relationships.totalRecords,
        first: state.relationships.first
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchRelationship(url){
            dispatch(fetchRelationship(url))
        },
        fetchAllRelationships(url, first){
            dispatch(fetchAllRelationships(url, first))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelationshipList);