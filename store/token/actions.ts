import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const SET_TOKEN = "SET_TOKEN";
export type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string,
};

export const setToken: ActionCreator<AnyAction> = (token) => {
    return ({
        type: SET_TOKEN,
        token
    });
}

export const setTokenThunk = (token: string): ThunkAction<void, RootState, unknown, Action<string>> => ((dispatch, getState) => {
    dispatch(setToken(token));
})

export type tokenState = {
    token: string,
}