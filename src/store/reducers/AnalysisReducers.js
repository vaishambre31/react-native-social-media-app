import { GET_TRUMP, GET_BIDEN } from "../types";

const initialState = {
    trump: [],
    biden: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRUMP:
            return {
                ...state,
                trump: action.payload
            }
        case GET_BIDEN:
            return {
                ...state,
                biden: action.payload
            }
        default:
            return state;
    }
}