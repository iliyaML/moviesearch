import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieDetails from './MovieDetails';

class Main extends Component {
    constructor(props){
        super(props);

        this.updateIndicator = this.updateIndicator.bind(this);
    }

    updateIndicator() {
        // alert('You are currently ' + (navigator.onLine ? 'online' : 'offline'));
        if (navigator.onLine) {
            document.getElementById('networkAlert').style.display = "none";
        } else {
            document.getElementById('networkAlert').style.display = "block";
        }
    }

    componentDidMount() {
        this.updateIndicator();
    }

    render() {
        window.addEventListener('online', this.updateIndicator);
        window.addEventListener('offline', this.updateIndicator);

        return (
            <main role="main" className="container">
                <div className="alert alert-dark" role="alert" id="networkAlert">
                    You are currently offline so some functions may not work properly.
                </div>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={MovieSearch} />
                    <Route exact path={process.env.PUBLIC_URL + '/id/:id'} component={MovieDetails} />
                </Switch>
            </main>
        )
    }
}

export default Main;