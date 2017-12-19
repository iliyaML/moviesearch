import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './custom.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
