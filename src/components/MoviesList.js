import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MoviesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items
        }
    }

    render() {
        const moviesItems = this.props.items.map((item) => {
            return (
                <MovieItem item={item} key={item.imdbID} />
            )
        });

        return (
            <div id="movies" className="row">
                {moviesItems}
            </div>
        )
    }
}

export default MoviesList;