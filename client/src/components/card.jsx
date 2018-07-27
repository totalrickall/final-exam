import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card" style={{ width: '18rem', height: '32rem', float: 'left' }}>
                <img className="card-img-top" src={`${this.props.poster}`} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <h5 className="card-text">{this.props.director}</h5>
                    <Link className="card-btn" to={`/movie/${this.props.link}`}>View Movie</Link>
                </div>
            </div>
        )
    }
}