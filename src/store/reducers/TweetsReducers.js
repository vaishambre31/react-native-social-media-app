import { GET_PURE_TWEETS, GET_RETWEETS, TWEET_ERROR, SET_LOADING, GET_ANALYSIS } from "../types";

const initialState = {
    tweets: [],
    retweets: [],
    error: null,
    analysis: null,
    loading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PURE_TWEETS:
            return {
                ...state,
                loading: false,
                tweets: action.payload,
            }
        case GET_ANALYSIS:
            return {
                ...state,
                loading: false,
                analysis: action.payload
            }
        case GET_RETWEETS:
        case TWEET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}