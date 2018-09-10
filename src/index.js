import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackInput = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}


const feedbackForm = (state = feedbackInput, action) => {
    if (action.type === 'ADD_FEELING') {
        const newInfo = action.payload;
        return {...state, feeling: newInfo.feeling};
    } else if (action.type === 'ADD_UNDERSTANDING') {
        const newInfo = action.payload;
        return {...state, understanding: newInfo.understanding};
    } else if (action.type === 'ADD_SUPPORT') {
        const newInfo = action.payload;
        return {...state, support: newInfo.support}
    } 
    return state;
}

const storeInstance = createStore(
    combineReducers({feedbackForm}),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
