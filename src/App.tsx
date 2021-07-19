import React from 'react';
import './App.css';
import {Header} from "./componens/Header/Header";
import {Navbar} from "./componens/Navbar/Navbar";
import {Profile} from "./componens/Profile/Profile";
import {Dialogs} from "./componens/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";


export type PropsType = {
    state: RootStateType
    addPost: (postMessage?: string) => void
    updateNewPostText: (newText?: string) => void
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                    addPost={props.addPost}
                                                                    newPostText={props.state.profilePage.newPostText}
                                                                    updateNewPostText={props.updateNewPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
