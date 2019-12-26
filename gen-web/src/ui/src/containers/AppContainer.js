import {fetchAllItems} from '../actions/item'

import {connect} from "react-redux";
import App from '../components/App'
import {fetchAllItemTypes} from '../actions/itemtype'
import {fetchAllItemAttributeTypes} from '../actions/itemattributetype'
import {fetchAllItemAttrTypeDatatypes} from '../actions/itemattrtypedatatype'
import {fetchAllItemAttributes} from '../actions/itemattribute'; 
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
	    fetchAllItemAttributes: (url) => dispatch(fetchAllItemAttributes(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)