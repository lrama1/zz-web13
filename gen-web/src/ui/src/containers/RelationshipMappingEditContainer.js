import {connect} from 'react-redux';
import {editRelationshipMapping, saveRelationshipMapping} from '../actions/relationshipmapping';
import RelationshipMappingEdit from '../components/RelationshipMappingEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedRelationshipMapping: state.relationshipMapping,
        items: state.items,
        relationshipTypes: state.relationshipTypes
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditRelationshipMapping(event){
            const {name, value} = event.target;
            dispatch(editRelationshipMapping([name], value))
        },
        onSaveRelationshipMapping(url, relationshipMapping){
            dispatch(saveRelationshipMapping(url, relationshipMapping))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(RelationshipMappingEdit);