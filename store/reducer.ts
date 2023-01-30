import { ActionCreator, AnyAction, Reducer } from "redux";
import { CommentState, SET_ERR_VALUE, SET_TOUCHED, UpdateCommentAction, UPDATE_COMMENT } from "./comment/actions";
import { CommentAction, commentReducer } from "./comment/reducer";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { SetTokenAction, SET_TOKEN, tokenState } from "./token/actions";
import { tokenReducer } from "./token/reducer";

export type RootState = {
    comment: CommentState;
    token: tokenState;
    me: MeState;
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({ type: UPDATE_COMMENT, text });

const initialState: RootState = {
    comment: {
        commentText: "Welcome",
        touched: false,
        valueError: "",
    },
    token: { token: "" },
    me: {
        loading: false,
        error: "",
        data: {}
    }
}

type MyAction =
    SetTokenAction
    | CommentAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
        case SET_TOUCHED:
        case SET_ERR_VALUE:
            return {
                ...state,
                comment: commentReducer(state.comment, action)
            }
        case SET_TOKEN:
            return {
                ...state,
                token: tokenReducer(state.token, action)
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;
    }
}


