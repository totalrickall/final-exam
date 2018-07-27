import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import MoviePage from './moviePage';
import Actors from './actors';
import './styles/app.css';
import Nav from './nav';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/movie/:id" component={MoviePage} />
                        <Route exact path="/actors/:id" component={Actors} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;