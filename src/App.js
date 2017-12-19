import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
