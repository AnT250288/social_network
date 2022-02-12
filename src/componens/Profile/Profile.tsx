import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


export const Profile = (props:ProfileContainerPropsType) => {

    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    )
}