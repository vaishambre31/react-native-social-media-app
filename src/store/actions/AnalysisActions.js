import { GET_PURE_TWEETS, GET_RETWEETS, TWEET_ERROR, SET_LOADING, GET_ANALYSIS, GET_TRUMP } from "../types";
import Api from "../../config/Api";

const Get_Trump = () => async dispatch => {

    try {
        const response = await Api.get('/api/trump');
        const data = response.data;
        console.log("data" + data);
        dispatch({
            type: GET_TRUMP,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error
        });
    }
}

const Get_Biden = () => async dispatch => {

    try {
        const response = await Api.get('/api/biden');
        const data = response.data;

        dispatch({
            type: GET_BIDEN,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error
        });
    }
}
export {
    Get_Trump,
    Get_Biden
}