import { ActionCreator, AnyAction, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
}

const UPDATE_COMMENT = "UPDATE_COMMENT";
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string,
}

export const updateComment:ActionCreator<AnyAction> = (text) => ({type: UPDATE_COMMENT, text});

// export const setUserData:ActionCreator<AnyAction> = (userImage, userName) => ({type: "SET_USERNAME", userImage, userName}) 

const SET_TOKEN = "SET_TOKEN"
type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string,
}

export const setToken:ActionCreator<AnyAction> = (token) => {
    return ({
        type: SET_TOKEN,
        token
    })
}

const initialState: RootState = {
    commentText: "Welcome to my app",
    token: "",
    me: {
        loading: false,
        error: "",
        data: {
            // username: "Anonym",
            // avatarSrc: "";
        }
    }
}

type MyAction = SetTokenAction
 | UpdateCommentAction 
 | MeRequestAction 
 | MeRequestSuccessAction 
 | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:        
        case ME_REQUEST_SUCCESS:        
        case ME_REQUEST_ERROR:
            return meReducer(state.me, action);        
        default: 
            return state;
    }
}


