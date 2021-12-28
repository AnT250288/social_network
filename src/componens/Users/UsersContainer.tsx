import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC, UsersInitialStateType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: UsersInitialStateType
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUserAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
