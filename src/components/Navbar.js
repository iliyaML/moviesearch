import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link to={process.env.PUBLIC_URL + '/'} className="navbar-brand">MovieSearch</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;