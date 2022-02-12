import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {
    addPostActionCreator,
    profileReducer,
    setUserProfile,
    updateNewPostMessageActionCreator
} from "./profileReducer";
import {addMessageActionCreator, dialogReducer, updateNewMessageActionCreator} from "./dialogReducer";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    setIsFetching,
    unFollowSuccess,
    usersReducer,
    setFollowing
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";
import thunkMiddleware from "redux-thunk"


export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostMessageActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setFollowing>
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

export const store: Store & AppStoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware))
