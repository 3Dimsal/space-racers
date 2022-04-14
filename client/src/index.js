import React from 'react';
import ReactDom from 'react-dom';
// Setting Up Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import './index.css';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root')
 );

