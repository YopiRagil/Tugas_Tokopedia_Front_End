import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import signinReducer from "./reducer/signInReducer"
import orderReducer from "./reducer/orderReducer"

const rootReducer = combineReducers({
    user: signinReducer,
    order: orderReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

export default store;