import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//This is the array that includes each input to send to the db.
const feedbackInput = [{
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}]

//This is the reducer.
const feedbackForm = (state = feedbackInput, action) => {
    if (action.type === 'UPDATE_FEEDBACK') {
        const newInput = action.payload;
        return {...state, type: newInput.feedbackInput}
    } else if (action.type === 'ADD_FEELING') {
        const newInput = action.payload;
        return { ...state, feeling: newInput.feeling };
    } else if (action.type === 'ADD_UNDERSTANDING') {
        const newInput = action.payload;
        return { ...state, understanding: newInput.understanding };
    } else if (action.type === 'ADD_SUPPORT') {
        const newInput = action.payload;
        return { ...state, support: newInput.support }
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({ feedbackForm }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
