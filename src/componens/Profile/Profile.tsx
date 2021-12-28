import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    // store: AppStoreType
}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}