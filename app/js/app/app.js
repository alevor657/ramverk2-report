import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import Report from './components/Report';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import 'normalize.css';
import '../../scss/main.scss';

const store = createStore(
    combineReducers({
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navbar/>
                <Route exact path="/" component={Index}>
                </Route>
                <Route exact path="/about" component={About}>
                </Route>
                <Route exact path="/report" component={Report}>
                </Route>
                <Footer/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// TODO:
// stylelitnt with scss
// scss
