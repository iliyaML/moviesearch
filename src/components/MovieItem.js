import React, { Component } from 'react';
import noimage from '../no_image_available.jpeg';

class MovieItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        const image = (this.state.item.Poster === "N/A") ? noimage : this.state.item.Poster;
        return (
            <div className="col-md-3 card">
                <a href={`http://imdb.com/title/${this.state.item.imdbID}`} target="_blank">
                <img className="card-img-top" src={image} alt={this.state.item.Title} />
                </a>
                <div className="card-body">
                    <p className="card-text text-center">{this.state.item.Title}</p>
                </div>
            </div>
        )
    }
}

export default MovieItem;