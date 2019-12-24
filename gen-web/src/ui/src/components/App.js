import React from 'react';
import {HashRouter, Route, Link } from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ItemListContainer from '../containers/ItemListContainer';
import ItemEditContainer from '../containers/ItemEditContainer';
import Home from './Home';
import ItemTypeListContainer from '../containers/ItemTypeListContainer';
import ItemTypeEditContainer from '../containers/ItemTypeEditContainer';
import ItemAttributeTypeListContainer from '../containers/ItemAttributeTypeListContainer';
import ItemAttributeTypeEditContainer from '../containers/ItemAttributeTypeEditContainer';
import ItemAttrTypeDatatypeListContainer from '../containers/ItemAttrTypeDatatypeListContainer';
import ItemAttrTypeDatatypeEditContainer from '../containers/ItemAttrTypeDatatypeEditContainer';





function App(props){

    return(
    	<HashRouter>
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
                                <Link className="nav-link" to="/items" onClick={() => props.fetchAllItems('items?page=1&per_page=10')}>Items</Link>
                            </li>
<li><Link  className="nav-link" to="/itemtypes"  onClick={() => props.fetchAllItemTypes('/itemtypes?page=1&per_page=10')} >ItemType</Link></li>
<li><Link  className="nav-link" to="/itemattributetypes"  onClick={() => props.fetchAllItemAttributeTypes('/itemattributetypes?page=1&per_page=10')} >ItemAttributeType</Link></li>
<li><Link  className="nav-link" to="/itemattrtypedatatypes"  onClick={() => props.fetchAllItemAttrTypeDatatypes('/itemattrtypedatatypes?page=1&per_page=10')} >ItemAttrTypeDatatype</Link></li>                            
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
                        <Route path="/items" exact component={ItemListContainer} />
                        <Route path="/item" exact component={ItemEditContainer} />
<Route path="/itemtypes" exact component={ItemTypeListContainer}/>
<Route path="/itemtype" exact component={ItemTypeEditContainer}/>
<Route path="/itemattributetypes" exact component={ItemAttributeTypeListContainer}/>
<Route path="/itemattributetype" exact component={ItemAttributeTypeEditContainer}/>
<Route path="/itemattrtypedatatypes" exact component={ItemAttrTypeDatatypeListContainer}/>
<Route path="/itemattrtypedatatype" exact component={ItemAttrTypeDatatypeEditContainer}/>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
