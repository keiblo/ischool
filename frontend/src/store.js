import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
  courseListReducer,
  courseDetailsReducer,
} from './reducers/courseReducers'
import {cartReducer} from './reducers/cartReducers'

const reducer = combineReducers({
  courseList: courseListReducer,
  courseDetails: courseDetailsReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartImtmes')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: {cartItems: cartItemsFromStorage},
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
