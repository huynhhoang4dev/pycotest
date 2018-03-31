import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './Store'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'



const appRoot = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/page/:pageId" component={App} />
            </div>
            
        </Router>
    </Provider>, 
    appRoot);
registerServiceWorker();

