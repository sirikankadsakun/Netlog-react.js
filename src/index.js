import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import $ from 'jquery/dist/jquery.slim';
//import popper from 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.bundle';
import Netlog from './Netlog';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Netlog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
