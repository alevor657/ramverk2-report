import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import Report from './components/Report';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Chat from './components/Chat';
import NotFound from './components/internal/NotFound';

import 'normalize.css';
import '../../scss/main.scss';

const store = createStore(
    combineReducers({
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path="/about" component={About}/>
                            <Route path="/report" component={Report}/>
                            <Route path="/chat" component={Chat}/>
                            <Route component={NotFound}/>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;


// TODO:
// stylelitnt with scss
// scss
