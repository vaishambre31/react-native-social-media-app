import { GET_PURE_TWEETS, GET_RETWEETS, TWEET_ERROR, SET_LOADING, GET_ANALYSIS } from "../types";
import Api from "../../config/Api";

const Get_Feed = () => async dispatch => {

    try {
        const response = await Api.get('/api/feed');
        const data = await response.data.resData;
        console.log(data);
        if (response.status === 200) {
            dispatch({
                type: GET_PURE_TWEETS,
                payload: data
            });
        } else {
            dispatch({
                type: TWEET_ERROR,
                payload: 'something went wrong'
            });
        }

    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.message
        });
    }
}

const Get_RTS = () => async dispatch => {
    try {

    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const Get_Comments = () => async dispatch => {
    try {

    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const Get_Analysis = (text) => async dispatch => {
    try {
        const response = await Api.get(`/api/sentiment/${text}`);
        const data = response.data;
        if (response.status === 200) {
            dispatch({
                type: GET_ANALYSIS,
                payload: data
            });
        } else {
            dispatch({
                type: TWEET_ERROR,
                payload: 'something went wrong'
            });
        }
    } catch (error) {
        dispatch({
            type: TWEET_ERROR,
            payload: error.message
        });
    }
}

export {
    Get_Feed,
    Get_RTS,
    Get_Comments,
    Get_Analysis
}