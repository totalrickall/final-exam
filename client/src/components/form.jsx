import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      movie: {
        director: '',
        poster: '',
        title: ''
      }
    }
  }
  handleMovieSubmit() {
    // POST Blogs
    let url = 'http://localhost:3000/api/movies';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state.movie),
      headers: { "Content-Type": "application/json" }

    }).then((res) => {
      return res.json();
    }).catch((err) => {
      console.log(err);
    });
  }
  handleDirectorChange(director) {
    let movie = Object.assign({}, this.state.movie, { director });
    this.setState({ movie });
  }
  handlePosterChange(poster) {
    let movie = Object.assign({}, this.state.movie, { poster });
    this.setState({ movie });
  }
  handleTitleChange(title) {
    let movie = Object.assign({}, this.state.movie, { title });
    this.setState({ movie });
  }
  render() {
    return (
      <div className="form-container">
        <form className="movie-form" action="/" method="POST" className="movie-form">
          <div className="form-group">
            <label className="form-label-director" htmlFor="exampleFormControlInput1">Director</label>
            <input className="form-control" id="exampleFormControlInput1" placeholder='Enter movie director!' onChange={(e) => {
              this.handleDirectorChange(e.target.value)
            }} name="director" />
          </div>
          <div className="form-group">
            <label className="form-label-Poster" htmlFor="exampleFormControlInput2">Poster</label>
            <input className="form-control" id="exampleFormControlInput2" placeholder='Enter movie poster!' onChange={(e) => {
              this.handlePosterChange(e.target.value)
            }} name="poster" />
          </div>
          <div className="form-group">
            <label className="form-label-title" htmlFor="exampleFormControlInput3">Title</label>
            <input className="form-control" id="exampleFormControlInput3" placeholder='Enter movie title!' onChange={(e) => {
              this.handleTitleChange(e.target.value)
            }} name="title" />
          </div>
          <button className="form-btn" onClick={() => {
            this.handleMovieSubmit()
          }}>Inesert Movie</button>

        </form>
      </div>
    )
  }
};