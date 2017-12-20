import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        };
    }

    componentWillMount() {
        this.getMovieDetails();
    }

    getMovieDetails() {
        const movieId = this.props.match.params.id;
        axios.get(`http://www.omdbapi.com/?apikey=5b08bfa9&i=${movieId}`)
            .then(response => {
                this.setState({
                    movie: response.data
                }, () => console.log(this.state.movie));
            })
            .catch(err => console.log(err));
    }

    render() {
        const movie = this.state.movie;
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-4">
                        <img src={movie.Poster} className="thumbnail" alt={movie.Title} />
                    </div>
                    <div className="col-md-8">
                        <h2>{movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Genre:</strong> {movie.Genre}</li>
                            <li className="list-group-item"><strong>Released:</strong> {movie.Released}</li>
                            <li className="list-group-item"><strong>Rated:</strong> {movie.Rated}</li>
                            <li className="list-group-item"><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
                            <li className="list-group-item"><strong>Director:</strong> {movie.Director}</li>
                            <li className="list-group-item"><strong>Writer:</strong> {movie.Writer}</li>
                            <li className="list-group-item"><strong>Actors:</strong> {movie.Actors}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="well mt-3">
                        <h3>Plot</h3>
                        {movie.Plot}
                        <hr />
                        <a href={"http://imdb.com/title/" + movie.imdbID} target="_blank" className="btn btn-primary">View IMDB</a>
                        <Link to="/" className="btn btn-default">Go Back To Search</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;