import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type PropsType ={
    posts: Array<PostType>
}

export const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>
        </div>
    )
}