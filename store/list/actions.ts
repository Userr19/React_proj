import axios from "axios";
import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { IModalState } from "./post/actions";

export interface IPostState {
    author_fullname?: string;
    link_flair_template_id?: string;
    id: string;
    saved?: boolean;
    clicked?: boolean;
    title: string;
    hidden?: boolean;
    name: string;
    thumbnail: string;//picture mini
    edited?: boolean;
    author: string;
    isVideo?: boolean;
    score?: number;
    url: string;// picture full
}

export interface IChild {
    data: IPostState;
}

export interface ListState {
    loading: boolean;
    children: Array<IChild>;
    errorLoading: string;
    after: string;
    loadedData: number;
    canLoad: boolean;
    signed: boolean;
    modal: IModalState
}

export const SET_SIGNED_USER = "SET_SIGNED_USER";
export type SetSignedUserAction = {
    type: typeof SET_SIGNED_USER,
    signed: boolean
}

export const SET_LOADING_POSTS = "SET_LOADING_POSTS";
export type SetLoadingPostsAction = {
    type: typeof SET_LOADING_POSTS,
    loading: boolean
}

export const SET_ERROR_LOADING_POSTS = "SET_ERROR_LOADING_POSTS";
export type SetErrorLoadignPostsAction = {
    type: typeof SET_ERROR_LOADING_POSTS,
    errorLoading: string
}

export const SET_NEXT_AFTER_POSTS = "SET_NEXT_AFTER_POSTS";
export type SetNextAfterPostsAction = {
    type: typeof SET_NEXT_AFTER_POSTS,
    nextAfter: string
}

export const SET_LOADED_DATA_POSTS = "SET_LOADED_DATA_POSTS";
export type SetLoadedDataPostsAction = {
    type: typeof SET_LOADED_DATA_POSTS,
    loadedData: number
}

export const SET_CAN_LOAD_POSTS = "SET_CAN_LOAD_POSTS";
export type SetCanLoadPostsAction = {
    type: typeof SET_CAN_LOAD_POSTS,
    canLoad: boolean
}

export const POST_REQUEST_SUCCESS = "POST_REQUEST_SUCCESS";
export const POST_REQUEST_ERROR = "POST_REQUEST_ERROR";
export const POST_REQUEST = "POST_REQUEST";

export type PostRequestAction = {
    type: typeof POST_REQUEST
}

export const postRequest: ActionCreator<PostRequestAction> = () => ({
    type: POST_REQUEST,
});

export type PostRequestSuccessAction = {
    type: typeof POST_REQUEST_SUCCESS,
    children: Array<IChild>,
    after: string
};

export type PostRequestErrorAction = {
    type: typeof POST_REQUEST_ERROR,
    error: string
}

export const postRequestSuccess: ActionCreator<PostRequestSuccessAction> = (data) => ({
    type: POST_REQUEST_SUCCESS,
    children: data?.children.filter((item: IChild, i: number, arr: IChild[]) => {
        let count = 0;
        for (let j = 0; j < arr.length; ++j) {
            if (j != i && arr[j].data.id != item.data.id)
                count++;
        }
        return count >= arr.length - 1
    }) ?? [],
    after: data?.after ?? ""
});

export const postRequestError: ActionCreator<PostRequestErrorAction> = (error) => ({
    type: POST_REQUEST_ERROR,
    error
});


export const SetLoadedDataPosts: ActionCreator<AnyAction> = (loadedData) => {
    return { type: SET_LOADED_DATA_POSTS, loadedData }
};

export const SetSignedUser: ActionCreator<Action> = (signed) => ({
    type: SET_SIGNED_USER,
    signed,
})

export const postRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => ((dispatch, getState) => {
    dispatch(postRequest());
    axios.get('https://oauth.reddit.com/rising/', {
        headers: { Authorization: `bearer ${getState().token.token}` },
        params: { limit: 10, after: getState().list.after }
    }).then((resp) => {
        let resData = resp.data.data;
        if (getState().token.token !== "undefined") {
            dispatch(SetSignedUser(true));
        }

        dispatch(postRequestSuccess(resData));
        dispatch(SetLoadedDataPosts(getState().list.loadedData + 1));
        dispatch(SetLoadingPosts(false));
    }).catch((err) => {
        console.log(err);

        dispatch(SetSignedUser(false));
    });
});

export const SetCanLoadPosts: ActionCreator<AnyAction> = (canLoad) => ({ type: SET_CAN_LOAD_POSTS, canLoad })

export const SetLoadingPosts: ActionCreator<AnyAction> = (loading) => ({ type: SET_LOADING_POSTS, loading })

export const SetErrorLoadingPosts: ActionCreator<AnyAction> = (errorLoading) => ({ type: SET_ERROR_LOADING_POSTS, errorLoading })

export const SetNextAfterPosts: ActionCreator<AnyAction> = (nextAfter) => ({ type: SET_NEXT_AFTER_POSTS, nextAfter })
