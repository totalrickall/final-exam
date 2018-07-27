import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './card';
import Form from './form';

export default class Home extends Component {

    constructor() {
        super();
        
        this.state = {
            movieCollection: []
        }
    }
    componentDidMount() {
        let url = `http://localhost:3000/api/movies`;
        fetch(url).then((res) => {
            return res.json();
        }).then((movies) => {
            //console.log(movies);
            Object.values(movies).forEach((movie) => {
                //console.log(movie);
                this.setState({
                    movieCollection: [...this.state.movieCollection, movie]
                })
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="home-container">
                <Form />
                <br/>
                <div className="cards-container">
                    {this.state.movieCollection.map((movie) => {
                        return (
                            <Card
                            key={movie.id}
                            director={movie.director}
                            poster={movie.poster}
                            title={movie.title}
                            link={movie.id}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
};