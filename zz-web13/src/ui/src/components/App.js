import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import {connect, dispatch} from 'react-redux'

import QuestionListContainer from '../containers/QuestionListContainer';
import QuestionEditContainer from '../containers/QuestionEditContainer';
import Home from './Home';
import {fetchAllQuestions} from '../actions'

const App  = (props) => {

    return(
    	<BrowserRouter>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link> <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/questions" onClick={() => props.fetchAllQuestions('/questions?page=1&per_page=10')}>Questions</Link>
                            </li>                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-xs-12">
                        <Route path="/" exact component={Home} />
                        <Route path="/questions" exact component={QuestionListContainer} />
                        <Route path="/question" exact component={QuestionEditContainer} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        questions: state.questionsReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllQuestions: (url) => dispatch(fetchAllQuestions(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
