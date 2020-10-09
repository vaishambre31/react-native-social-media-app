import Api from "../../config/Api";
import { SEARCH_TWEET } from "../types";

const SearchTweet = (text) => async dispatch => {
    try {
        const response = await Api.get(`/api/search/${text}`);
        const data = response.data;
        dispatch({
            type: SEARCH_TWEET,
            payload: data
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

export {
    SearchTweet
}