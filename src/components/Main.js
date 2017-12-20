import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieDetails from './MovieDetails';

class Main extends Component {
    render() {
        return (
            <main role="main" className="container">
                <Switch>
                    <Route exact path='/' component={MovieSearch} />
                    <Route exact path='/id/:id' component={MovieDetails} />
                </Switch>
            </main>
        )
    }
}

export default Main;