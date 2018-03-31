import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import gifsApp from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    gifsApp,
    composeEnhancers(applyMiddleware(
        thunkMiddleware
    ))
    
)

export default store