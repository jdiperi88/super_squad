import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import rootReducer from './reducers'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {addCharacterById} from './actions/actions'

const store = createStore(rootReducer);

store.subscribe(()=> console.log(store.getState()))
console.log(store.getState())
store.dispatch(addCharacterById(3))
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));