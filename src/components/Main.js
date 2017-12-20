import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieDetails from './MovieDetails';

class Main extends Component {
    render() {
        return (
            <main role="main" className="container">
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={MovieSearch} />
                    <Route exact path={process.env.PUBLIC_URL + '/id/:id'} component={MovieDetails} />
                </Switch>
            </main>
        )
    }
}

export default Main;