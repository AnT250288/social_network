import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";



type PropsType = {
    posts: Array<PostType>
    addPost: (postMessage?: string) => void
    newPostText?: string
    updateNewPostText: (newText: string | undefined) => void
}


export const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}