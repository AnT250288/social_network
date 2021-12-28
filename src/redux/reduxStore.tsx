import {combineReducers, createStore, Store} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostMessageActionCreator} from "./profileReducer";
import {addMessageActionCreator, dialogReducer, updateNewMessageActionCreator} from "./dialogReducer";
import {followAC, setUserAC, unfollowAC, usersReducer} from "./usersReducer";

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostMessageActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    // sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

class AppStoreType {
}

export const store: Store & AppStoreType = createStore(rootReducer)
/*
export type AppStoreType = typeof store*/
