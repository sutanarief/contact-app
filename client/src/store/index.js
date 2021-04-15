import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contactReducer from './reducers/contacts'
import logger from './middlewares/logger'

const rootReducer = combineReducers({
  contacts: contactReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store