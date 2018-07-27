import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Actors extends Component {
    constructor() {
        super();

        this.state = {
            actorContainer: []
        }
    }
    componentDidMount() {
        let url = `http://localhost:3000/api/movies-actors/${this.props.match.params.id}`;
        fetch(url).then((res) => {
            return res.json();
        }).then((val) => {
            //console.log(val);
            Object.values(val).forEach((actor) => {
                //console.log(actor);
                //console.log(actor.name);
                this.setState({
                    actorContainer: [...this.state.actorContainer, actor]
                })
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="actors-container">
                <Link className="back-btn" to={`/movie/${this.props.match.params.id}`}>Go Back</Link>
                <h1>Actors in this movie...</h1>
                {this.state.actorContainer.map((actor) => {
                    return(
                      <h6 key={actor.actorid}>{actor.name}</h6>  
                    )
                    
                })}
            </div>
        )
    }
}