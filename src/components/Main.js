import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieDetails from './MovieDetails';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            online: navigator.onLine
        }

        this.updateIndicator = this.updateIndicator.bind(this);
    }

    updateIndicator() {
        this.setState({
            online: navigator.onLine
        })
    }

    componentDidMount() {
        this.updateIndicator();
    }

    render() {
        window.addEventListener('online', this.updateIndicator);
        window.addEventListener('offline', this.updateIndicator);

        const networkAlert = this.state.online ? '' : (<div className="alert alert-dark" role="alert" id="networkAlert">
            You are currently offline so some functions may not work properly.
            </div>);

        return (
            <main role="main" className="container">
                {networkAlert}
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={MovieSearch} />
                    <Route exact path={process.env.PUBLIC_URL + '/id/:id'} component={MovieDetails} />
                </Switch>
            </main>
        )
    }
}

export default Main;