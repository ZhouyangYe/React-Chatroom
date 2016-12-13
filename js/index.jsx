import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import socket from './store';

// const store = createStore(allReducers);

const render = ()=>{
    ReactDom.render(
        <Provider store={socket.store}>
            <App />
        </Provider>,
        document.querySelector('#app')
    );
};

render();
