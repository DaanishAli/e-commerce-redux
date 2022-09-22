import { createStore, combineReducers } from 'redux';
import ProductReducer from './reducers/ProductReducer';
import CartReducer from './reducers/CartReducer'

const root = combineReducers({
    ProductReducer,
    CartReducer
});
const store = createStore(root)
export default store;