import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './reducers/product.reducers'
import { collectionDetailsReducer, collectionListReducer } from './reducers/collection.reducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    collectionList: collectionListReducer,
    collectionDetails: collectionDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store