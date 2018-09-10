import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './redux/reducers/feedbackForm.js'

//this is the code that creates the store that goes with moving the reducer to its own file.
const storeInstance = createStore(
    reducers,
    applyMiddleware(logger)
)



// const storeInstance = createStore(
//     combineReducers({ feedbackForm }),
//     applyMiddleware(logger),
// );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

//Switch-case is another way to do an if-else statement.
//switch (action.type) {
    //case 'ADD_FEELING':
    //const newInput = action.payload;
        //return { ...state, feeling: newInput.feeling };
    //case 'ADD_UNDERSTANDING':{
        //...
    //}
    //default: 
    //return: state
//}
