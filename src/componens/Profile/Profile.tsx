import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type PropsType ={
    posts: Array<PostType>
    addPost: (postMessage?: string) => void
    newPostText?: string
    updateNewPostText: (newText?: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}
                     addPost ={props.addPost}
                     newPostText = {props.newPostText}
                     updateNewPostText = {props.updateNewPostText}
            />
        </div>
    )
}