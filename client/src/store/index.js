import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contactReducer from './reducers/contacts'

const rootReducer = combineReducers({
  contacts: contactReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store