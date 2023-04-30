import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from "./src/App";
import './css/chat.css';
import rootReducer from './reducer/chatreducer'

const INITIAL_STATE = {
   payload: '',
 };
const store = createStore(
    rootReducer,
    INITIAL_STATE,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
 )
 render(
    <Provider store = {store}>
       <App />
    </Provider>, document.getElementById('root')
 )