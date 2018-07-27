import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid black',
    width: '50em'
  }
};

export default class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      movieContainer: [],
      modalIsOpen: false,
      movie: {
        director: '',
        poster: '',
        title: ''
      }
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    // read specific movie
    let url = `http://localhost:3000/api/movies/${this.props.match.params.id}`;
    fetch(url)
      .then((res) => {
        return (res.json());
      }).then((movie) => {
        //console.log(movie);
        Object.values(movie).forEach((value) => {
          this.setState({
            movieContainer: [...this.state.movieContainer, value]
          })
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // UPDATE METHODS ****
  handleMovieUpdate() {
    let url = `http://localhost:3000/api/movies/${this.props.match.params.id}`;
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(this.state.movie),
      headers: { "Content-Type": "application/json" }
    }).then((res) => {
      location.reload();
      return res.json();
    }).catch((err) => {
      console.log(err)
    })
  };
  handleDirectorChange(director) {
    let movie = Object.assign({}, this.state.movie, { director });
    this.setState({ movie });
  };
  handlePosterChange(poster) {
    let movie = Object.assign({}, this.state.movie, { poster });
    this.setState({ movie });
  };
  handleTitleChange(title) {
    let movie = Object.assign({}, this.state.movie, { title });
    this.setState({ movie });
  };
  // DELETE METHODS ****
  handleMovieDelete() {
    let confirmBox = confirm(
      `Are you sure you would like to delete this movie?`
    );
    if (confirmBox) {
      // redirect back to home page if delete is 'confirmed'
      window.location = "/";
      //DELETE REQ
      let url = `http://localhost:3000/api/movies/${this.props.match.params.id}`;
      fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(this.state.movie),
        headers: { "Content-Type": "application/json" }
      }).then((res) => {
        return res.json();

      }).catch((err) => {
        console.log(err)
      })
    }
  };
  // MODAL METHODS ****
  openModal() {
    this.setState({ modalIsOpen: true });
  };
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  };
  closeModal() {
    this.setState({ modalIsOpen: false });
  };
  // INPUT CHANGE METHODS
  render() {
    return (
      <div className="single-movie-container" style={{ width: '32rem' }}>
        <h1 className="single-movie-header">Movie ID: {this.props.match.params.id}</h1>
        {this.state.movieContainer.map((movie) => {
          //console.log(movie)
          if (movie.director === undefined || movie.poster === undefined || movie.title === undefined) {
            return;
          }
          return (
            <div className="card" key={movie.id}>
              <img className="card-img-top" src={`${movie.poster}`} alt="" />
              <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <h5 className="card-director">{movie.director}</h5>
                <Link className="actors-link" to={`/actors/${this.props.match.params.id}`}>View Actors</Link>
              </div>
              <div>
                <a style={{ border: '1px solid black' }} className="modal-open-btn" onClick={() => {
                  this.openModal()
                }}>Edit</a>
                <a style={{ border: '1px solid black' }} className="delete-btn" onClick={() => {
                  this.handleMovieDelete()
                }}>Delete</a>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 className="modal-header" ref={subtitle => this.subtitle = subtitle}>Movie Editor:</h2>
                  <form>
                    <div className="form-group">
                      <label className="form-label-director" htmlFor="exampleFormControlInput1">Movie Director</label>
                      <input className="form-control" id="exampleFormControlInput1" placeholder='Edit movie director' onChange={(e) => {
                        this.handleDirectorChange(e.target.value)
                      }} name="director" />
                    </div>
                    <div className="form-group">
                      <label className="form-label-poster" htmlFor="exampleFormControlInput2">Movie Poster (url)</label>
                      <input className="form-control" id="exampleFormControlInput2" placeholder='Edit poster image address' onChange={(e) => {
                        this.handlePosterChange(e.target.value)
                      }} name="poster" />
                    </div>
                    <div className="form-group">
                      <label className="form-label-title" htmlFor="exampleFormControlInput3">Movie Title</label>
                      <input className="form-control" id="exampleFormControlInput3" placeholder='Edit movie title' onChange={(e) => {
                        this.handleTitleChange(e.target.value)
                      }} name="title" />
                      <a href={`localhost:3000/${this.props.match.params.id}`} className="modal-submit-btn" onClick={() => {
                        this.handleMovieUpdate()
                      }}>Submit</a>
                    </div>
                  </form>
                </Modal>
              </div>
            </div>
          )
        })}

      </div>
    )
  }
};