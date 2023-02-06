import { Reducer } from "react";
import { IModalState, SetDateAction, SetImageAction, SetTextAction, SetTitleAction, SetUserImageAction, SetUserNameAction, SET_DATE, SET_IMAGE, SET_TEXT, SET_TITLE, SET_USER_IMAGE, SET_USER_NAME } from "./actions";

export type ModalAction =
    SetTitleAction
    | SetDateAction
    | SetTextAction
    | SetUserNameAction
    | SetImageAction
    | SetUserImageAction;

export const ModalReducer: Reducer<IModalState, ModalAction> = (state, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        case SET_DATE:
            return {
                ...state,
                date: action.date
            }
        case SET_TEXT:
            return {
                ...state,
                text: action.text
            }
        case SET_IMAGE:
            return {
                ...state,
                image: action.image
            }
        case SET_USER_IMAGE:
            return {
                ...state,
                userImage: action.userImage
            }
        case SET_USER_NAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}