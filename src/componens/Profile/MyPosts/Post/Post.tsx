import React from "react";
import s from './Post.module.css';

type MessageType = {
    message: string
    likesCount: number
}

export const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ289Jo2E4Ma1DD2rzv-Hb-Ftag3u4WFJm-iA&usqp=CAU'}/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}