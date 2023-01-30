import { Reducer } from "react";
import { SetTokenAction, SET_TOKEN, tokenState } from "./actions";

export const tokenReducer: Reducer<tokenState, SetTokenAction> = (state, action) => {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        default:
            return state;
    }
}