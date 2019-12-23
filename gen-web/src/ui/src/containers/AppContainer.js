import {fetchAllItems} from '../actions/item'

import {connect} from "react-redux";
import App from '../components/App'

const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.itemsReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllItems: (url) => dispatch(fetchAllItems(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)