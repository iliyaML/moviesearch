import React, { Component } from 'react';
import MoviesList from './MoviesList';
import axios from 'axios';
import idbKeyval from 'idb-keyval';

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    searchMovies(e) {
        e.preventDefault();
        const input = this.refs.input.value.toLowerCase();

        idbKeyval.get(input).then(val => {
            console.log(val);
            if (val !== undefined) {
                this.setState({
                    items: val
                });
            }

            axios.get(`https://www.omdbapi.com/?apikey=5b08bfa9&s=${input}`)
                .then(response => {
                    let searchData = response.data.Search;
                    if (response.data.Response !== "False") {
                        idbKeyval.set(input, searchData);
                        this.setState({
                            items: searchData
                        }, () => console.log(this.state.items));
                    }
                })
                .catch(err => console.log(err));
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

export default MovieSearch;