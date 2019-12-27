import {fetchAllItems} from '../actions/item'

import {connect} from "react-redux";
import App from '../components/App'
import {fetchAllItemTypes} from '../actions/itemtype'
import {fetchAllItemAttributeTypes} from '../actions/itemattributetype'
import {fetchAllItemAttrTypeDatatypes} from '../actions/itemattrtypedatatype'
import {fetchAllItemAttributes} from '../actions/itemattribute'
import {fetchAllRelationshipTypes} from '../actions/relationshiptype'
import {fetchAllRelationships} from '../actions/relationship'
import {fetchAllRelationshipMappings} from '../actions/relationshipmapping'; 
; 
; 
; 
; 
; 
; 


const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.itemsReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllItems: (url) => dispatch(fetchAllItems(url)),
	    fetchAllItemTypes: (url) => dispatch(fetchAllItemTypes(url)),
	    fetchAllItemAttributeTypes: (url) => dispatch(fetchAllItemAttributeTypes(url)),
	    fetchAllItemAttrTypeDatatypes: (url) => dispatch(fetchAllItemAttrTypeDatatypes(url)),
	    fetchAllItemAttributes: (url) => dispatch(fetchAllItemAttributes(url)),
	    fetchAllRelationshipTypes: (url) => dispatch(fetchAllRelationshipTypes(url)),
	    fetchAllRelationships: (url) => dispatch(fetchAllRelationships(url)),
	    fetchAllRelationshipMappings: (url) => dispatch(fetchAllRelationshipMappings(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)