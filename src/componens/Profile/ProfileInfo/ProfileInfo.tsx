import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://cdn.wccftech.com/wp-content/uploads/2020/09/WCCFgenshinimpact9.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}