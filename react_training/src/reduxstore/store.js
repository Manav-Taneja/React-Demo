import {combineReducers, createStore} from 'redux'
import { Reducer } from './reducer'
import {CartReducer} from './cartReducer'
import { applyMiddleware } from 'redux'
import middleware from './middleware'
import thunk from 'redux-thunk'
var reducer=combineReducers({Reducer,CartReducer})
var store =createStore(reducer,applyMiddleware(middleware,thunk))
export default store