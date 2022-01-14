import {v1} from "uuid";
import React from "react";
import {ActionsType} from "./reduxStore";

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: { small: string | null, large: string | null }
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const updateNewPostMessageActionCreator = (newPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    } as const
}

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export type InitialStateProfileReducerType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType
}

const initialState: InitialStateProfileReducerType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 0},
        {id: v1(), message: 'it\'s my first post', likesCount: 12}
    ],
    newPostText: "",
    profile: {
        fullName: "",
        lookingForAJob: true,
        lookingForAJobDescription: '',
        userId: 0,
        photos: {small: '', large: null}
    }
}

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ActionsType): InitialStateProfileReducerType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],

            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }

}