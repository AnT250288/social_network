import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateNewPostMessageActionCreator} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (postMessage: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            if (text) {
                dispatch(updateNewPostMessageActionCreator(text))
            }
        },
        addPost: (postMessage: string) => {
            dispatch(addPostActionCreator(postMessage))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


/*
export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage
                const addPost = () => store.dispatch(addPostActionCreator(state.newPostText))

                const onPostChange = (text: string) => {
                    if (text) {
                        store.dispatch(updateNewPostMessageActionCreator(text))
                    }
                }
                return <MyPosts posts={state.posts}
                                newPostText={state.newPostText}
                                addPost={addPost}
                                updateNewPostText={onPostChange}
                />
            }
            }
        </StoreContext.Consumer>
    )
}*/
