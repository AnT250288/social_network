import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://uploadstatic-sea.mihoyo.com/contentweb/20211214/2021121416202155278.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}