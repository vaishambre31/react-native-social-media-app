import { SEARCH_TWEET } from "../types";

const initialState = {
    searchData: [],
    loading: true,
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TWEET:
            return {
                ...state,
                searchData: action.payload,
                loading: false
            }
        default:
            return state;
    }
}