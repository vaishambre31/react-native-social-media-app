import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import TweetsReducers from "../store/reducers/TweetsReducers";
import AnalysisReducers from "../store/reducers/AnalysisReducers";
import SearchReducers from "../store/reducers/SearchReducers";

const rootReducer = combineReducers({
    Tweets: TweetsReducers,
    Analysis: AnalysisReducers,
    Search: SearchReducers
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;