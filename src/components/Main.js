import React, { Component } from 'react';
import MoviesList from './MoviesList'
import axios from 'axios'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    searchMovies(e) {
        e.preventDefault();
        const input = this.refs.input.value;

        axios.get(`http://www.omdbapi.com/?apikey=5b08bfa9&s=${input}`)
            .then(response => {
                console.log(response.data);
                if (response.data.Response !== "False") {
                    this.setState({
                        items: response.data.Search
                    }, () => console.log(this.state.items));
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="jumbotron">
                <h3 className="text-center">Search Movies</h3>
                <form id="searchForm" onSubmit={this.searchMovies.bind(this)}>
                    <input type="text" className="form-control" ref="input" name="input" placeholder="Search Movies..." />
                </form>
                <hr />
                <MoviesList items={this.state.items} />
            </div>
        )
    }
}

export default Main;