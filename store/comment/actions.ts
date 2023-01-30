import { ActionCreator, AnyAction } from "redux";

export type CommentState = {
    commentText: string;
    touched: boolean;
    valueError: string;
}

export const UPDATE_COMMENT = "UPDATE_COMMENT";
export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string,
}

export const SET_TOUCHED = "SET_TOUCHED";
export type SetTouchedAction = {
    type: typeof SET_TOUCHED,
    touched: boolean,
}

export const SET_ERR_VALUE = "SET_ERR_VALUE";
export type setErrorValueAction = {
    type: typeof SET_ERR_VALUE,
    valueError: string,
}

export const setErrorValue: ActionCreator<AnyAction> = (valueError) => ({ type: SET_ERR_VALUE, valueError })

export const updateComment: ActionCreator<AnyAction> = (text) => ({ type: UPDATE_COMMENT, text });

export const setTouched: ActionCreator<AnyAction> = (touched) => ({ type: SET_TOUCHED, touched });