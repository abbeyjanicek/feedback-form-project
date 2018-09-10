import { combineReducers } from 'redux';

//This is the object that includes each input to send to the db.
const feedbackInput = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

const feedbackForm = (state = feedbackInput, action) => {
    if (action.type === 'UPDATE_FEEDBACK') {
        return {...state, type: action.payload.feedbackInput}
    } else if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: action.payload.feeling };
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload.understanding };
    } else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload.support }
    }
    return state;
}

const reducers = combineReducers(
    {
         feedbackForm: feedbackForm,
    }
)

export default reducers;

//This is the reducer. "...state" keeps what is already there.
