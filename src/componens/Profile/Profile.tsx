import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type PropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    // store: AppStoreType
}

export const Profile = (props:ProfileContainerPropsType) => {

    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    )
}