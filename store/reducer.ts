import { ActionCreator, AnyAction, Reducer } from "redux";
import { CommentState, SET_ERR_VALUE, SET_TOUCHED, UPDATE_COMMENT } from "./comment/actions";
import { CommentAction, commentReducer } from "./comment/reducer";
import { ListState, POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, SET_CAN_LOAD_POSTS, SET_ERROR_LOADING_POSTS, SET_LOADED_DATA_POSTS, SET_LOADING_POSTS, SET_NEXT_AFTER_POSTS, SET_SIGNED_USER } from "./list/actions";
import { SET_DATE, SET_IMAGE, SET_TEXT, SET_TITLE, SET_USER_IMAGE, SET_USER_NAME } from "./list/post/actions";
import { ListAction, listReducer } from "./list/reducer";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { SetTokenAction, SET_TOKEN, tokenState } from "./token/actions";
import { tokenReducer } from "./token/reducer";

export type RootState = {
    comment: CommentState;
    token: tokenState;
    me: MeState;
    list: ListState;
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
    },
    list: {
        signed: false,
        loading: false,
        loadedData: 0,
        errorLoading: "",
        after: "",
        children: [],
        canLoad: true,
        modal: {
            title: "",
            text: "",
            date: "",
            username: "",
            userImage: "",
            image: ""
        }
    }
}

type MyAction =
    SetTokenAction
    | CommentAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | ListAction;

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
        case POST_REQUEST:
        case SET_SIGNED_USER:
        case POST_REQUEST_ERROR:
        case POST_REQUEST_SUCCESS:
        case SET_LOADED_DATA_POSTS:
        case SET_ERROR_LOADING_POSTS:
        case SET_CAN_LOAD_POSTS:
        case SET_NEXT_AFTER_POSTS:
        case SET_LOADING_POSTS:
        case SET_TITLE:
        case SET_TEXT:
        case SET_DATE:
        case SET_IMAGE:
        case SET_USER_NAME:
        case SET_USER_IMAGE:
            return {
                ...state,
                list: listReducer(state.list, action)
            }
        default:
            return state;
    }
}


