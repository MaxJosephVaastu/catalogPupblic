import {applyMiddleware, compose, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import reduxThunk from 'redux-thunk'

import reducer from './reducer'

const devtools = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn

const configureStore = (initialState) => {

    const enhancers = [
        applyMiddleware(
            reduxThunk,
            createLogger({
                diff: true,
                collapsed: true,
            }),
        ),
        devtools({
            maxAge: 5000
        }),
    ]

    const store = createStore(reducer, initialState, compose(...enhancers))
    return store
}

export default configureStore
