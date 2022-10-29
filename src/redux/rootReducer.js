import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import counterReducer from "./counter/counterReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import { productsReducer } from "./products/productsReducers";
import { userReducer } from "./user/userReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer,
    counter:counterReducer,
    products:productsReducer
});
export default rootReducer;