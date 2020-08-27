import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/magnific-popup/dist/jquery.magnific-popup';
import '../node_modules/font-awesome/css/font-awesome.css';
import './magnific-popup.css';
ReactDOM.render(<>
    <BrowserRouter>
        <App/>
    </BrowserRouter>

</>,document.getElementById("root"));