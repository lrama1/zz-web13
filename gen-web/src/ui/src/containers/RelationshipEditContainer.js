import {connect} from 'react-redux';
import {editRelationship, saveRelationship} from '../actions/relationship';
import RelationshipEdit from '../components/RelationshipEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedRelationship: state.relationship
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditRelationship(event){
            const {name, value} = event.target;
            dispatch(editRelationship([name], value))
        },
        onSaveRelationship(url, relationship){
            dispatch(saveRelationship(url, relationship))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(RelationshipEdit);