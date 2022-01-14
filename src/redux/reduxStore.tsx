import {combineReducers, createStore, Store} from "redux";
import {
    addPostActionCreator,
    profileReducer,
    setUserProfile,
    updateNewPostMessageActionCreator
} from "./profileReducer";
import {addMessageActionCreator, dialogReducer, updateNewMessageActionCreator} from "./dialogReducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    setIsFetching,
    unFollow,
    usersReducer
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostMessageActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    // sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

class AppStoreType {
}

export const store: Store & AppStoreType = createStore(rootReducer)
