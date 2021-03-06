import "./glarimy.css";
import React from "react";
import Home from "./home.jsx";
import AddForm from "./AddForm.jsx";
import Books from "./Books.jsx";
import store from "./store.js";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {fetchBooksFromServer} from "./rest.js";

class Library extends React.Component{
	constructor(props){
		super(props);

        store.subscribe( () => this.forceUpdate() );
        fetchBooksFromServer();
    }

	render(){
        return (
            <Router>
            <div>
                <h1>Glarimy Library</h1>
                <Link to="/">Home</Link> | <Link to="/add">Add Book</Link> | <Link to="/list">List Books</Link>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/add" component={AddForm}/>
                <Route path='/list' render={(props) => (
                    <Books {...props} store={store}/>
                )}/>
            </div>
            </Router>
        );
	}
};

export default Library;