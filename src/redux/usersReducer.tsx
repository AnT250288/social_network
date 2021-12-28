import {v1} from "uuid";
import {ActionsType} from "./reduxStore";

export type LocationType = {
    continent: string
    region: string
}
export type UserType = {
    id: string
    photos: {small: string | null, large: string | null}
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersInitialStateType = {
    users: UserType[]
}

let initialState: UsersInitialStateType = {
    users: []
}


export const usersReducer = (state = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: v1()
    } as const
}
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUserAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}