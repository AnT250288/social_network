import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    //dispatch: (action: ActionsType) => void
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}

export const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        //props.dispatch(addPostActionCreator(props.newPostText))
        props.addPost(props.newPostText)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget)  {
            const text = e.currentTarget.value
            //props.dispatch(updateNewPostMessageActionCreator(text))
            props.updateNewPostText(text)
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}