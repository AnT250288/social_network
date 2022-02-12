import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileContainerPropsType} from "../ProfileContainer";
import userPhoto from "../../../assets/images/user.png";


export const ProfileInfo = (props:ProfileContainerPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={'https://uploadstatic-sea.mihoyo.com/contentweb/20211214/2021121416202155278.jpg'} alt={"mainWorkSpace"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt={"userPhoto"}/>
                ava + description
            </div>
        </div>
    )
}