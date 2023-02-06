import { ActionCreator, AnyAction } from "redux";
import { IPostState } from "../actions";

export interface IModalState {
    title: string;
    date?: string;
    username: string;
    text: string;
    image: string;
    userImage: string;
}

export function getPost(id: string, arr: IPostState[]) {
    const [post] = arr.filter((item) => {
        return item.id == id;
    });
    return post;
}

export const SET_TITLE = "SET_TITLE";
export type SetTitleAction = {
    type: typeof SET_TITLE,
    title: string
}
export const SetTitle: ActionCreator<AnyAction> = (title) => ({ type: SET_TITLE, title });

export const SET_DATE = "SET_DATE";
export type SetDateAction = {
    type: typeof SET_DATE,
    date: string
}
export const SetDate: ActionCreator<AnyAction> = (date) => ({ type: SET_DATE, date });

export const SET_USER_NAME = "SET_USER_NAME";
export type SetUserNameAction = {
    type: typeof SET_USER_NAME,
    username: string
}
export const SetUserName: ActionCreator<AnyAction> = (username) => ({ type: SET_USER_NAME, username });

export const SET_TEXT = "SET_TEXT";
export type SetTextAction = {
    type: typeof SET_TEXT,
    text: string
}
export const SetText: ActionCreator<AnyAction> = (text) => ({ type: SET_TEXT, text });

export const SET_IMAGE = "SET_IMAGE";
export type SetImageAction = {
    type: typeof SET_IMAGE,
    image: string
}
export const SetImage: ActionCreator<AnyAction> = (image) => ({ type: SET_IMAGE, image });

export const SET_USER_IMAGE = "SET_USER_IMAGE";
export type SetUserImageAction = {
    type: typeof SET_USER_IMAGE,
    userImage: string
}
export const SetUserImage: ActionCreator<AnyAction> = (userImage) => ({ type: SET_USER_IMAGE, userImage });

