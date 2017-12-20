import React, { Component } from 'react';
import noimage from '../no_image_available.jpeg';
import { Link } from 'react-router-dom';

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
                <Link to={process.env.PUBLIC_URL + '/id/' + this.state.item.imdbID}>
                    <img className="card-img-top" src={image} alt={this.state.item.Title} />
                </Link>
                <div className="card-body">
                    <p className="card-text text-center">{this.state.item.Title} ({this.state.item.Year})</p>
                </div>
            </div>
        )
    }
}

export default MovieItem;