import { Reducer } from "react";
import { CommentState, setErrorValueAction, SetTouchedAction, SET_ERR_VALUE, SET_TOUCHED, UpdateCommentAction, UPDATE_COMMENT } from "./actions";

export type CommentAction = UpdateCommentAction | SetTouchedAction | setErrorValueAction;

export const commentReducer: Reducer<CommentState, CommentAction> = (state, action) => {
    switch (action.type) {
        case UPDATE_COMMENT: {
            return {
                ...state,
                commentText: action.text
            }
        }
        case SET_TOUCHED: {
            return {
                ...state,
                touched: action.touched
            }
        }
        case SET_ERR_VALUE: {
            return {
                ...state,
                valueError: action.valueError
            }
        }
    }
}