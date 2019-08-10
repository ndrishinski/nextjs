import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import data from './data/data.json';
// inital state
const startState = {
    cards: []
}


// create Store
export const initStore = (intialState = startState) => {
    return createStore(reducer, intialState, composeWithDevTools(applyMiddleware))
}