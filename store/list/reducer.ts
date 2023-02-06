import { Reducer } from "react";
import { ListState, PostRequestAction, PostRequestErrorAction, PostRequestSuccessAction, POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, SetCanLoadPostsAction, SetErrorLoadignPostsAction, SetLoadedDataPostsAction, SetLoadingPostsAction, SetNextAfterPostsAction, SetSignedUserAction, SET_CAN_LOAD_POSTS, SET_ERROR_LOADING_POSTS, SET_LOADED_DATA_POSTS, SET_LOADING_POSTS, SET_NEXT_AFTER_POSTS, SET_SIGNED_USER } from "./actions";
import { IChild } from "./actions";
import { SET_DATE, SET_IMAGE, SET_TEXT, SET_TITLE, SET_USER_IMAGE, SET_USER_NAME } from "./post/actions";
import { ModalAction, ModalReducer } from "./post/reducer";

export type ListAction =
    SetErrorLoadignPostsAction
    | SetLoadedDataPostsAction
    | SetCanLoadPostsAction
    | SetNextAfterPostsAction
    | PostRequestAction
    | PostRequestErrorAction
    | PostRequestSuccessAction
    | SetLoadingPostsAction
    | SetSignedUserAction
    | ModalAction;

export const listReducer: Reducer<ListState, ListAction> = (state, action) => {
    switch (action.type) {
        case SET_SIGNED_USER:
            return {
                ...state,
                signed: action.signed
            }
        case SET_LOADED_DATA_POSTS:
            return {
                ...state,
                loadedData: action.loadedData
            }
        case POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_REQUEST_ERROR:
            return {
                ...state,
                errorLoading: action.error
            }
        case POST_REQUEST_SUCCESS:
            return {
                ...state,
                children: [...state.children, ...action.children].filter((item: IChild, i: number, arr: IChild[]) => {
                    let count = 0;
                    for (let j = 0; j < arr.length; ++j) {
                        if (j != i && arr[j].data.id != item.data.id)
                            count++;
                    }
                    return count >= arr.length - 1
                }),
                after: action.after
            }
        case SET_ERROR_LOADING_POSTS:
            return {
                ...state,
                errorLoading: action.errorLoading
            }
        case SET_CAN_LOAD_POSTS:
            return {
                ...state,
                canLoad: action.canLoad
            }
        case SET_NEXT_AFTER_POSTS:
            return {
                ...state,
                nextAfter: action.nextAfter
            }
        case SET_LOADING_POSTS:
            return {
                ...state,
                loading: action.loading
            }
        case SET_TITLE:
        case SET_TEXT:
        case SET_DATE:
        case SET_IMAGE:
        case SET_USER_NAME:
        case SET_USER_IMAGE:
            return {
                ...state,
                modal: ModalReducer(state.modal, action)
            }
        default:
            return state;
    }
}