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
    if (action.type === 'ADD_FEEDBACK') {
        const feedback = action.payload;
        return {...state, feedback }
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({feedbackForm}),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
