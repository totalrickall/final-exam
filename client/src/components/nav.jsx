import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="" className="navbar-brand">Movies!</Link>
            </nav>
        )
    }
}