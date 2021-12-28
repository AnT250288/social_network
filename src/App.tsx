import React from 'react';
import './App.css';
import {Header} from "./componens/Header/Header";
import {Navbar} from "./componens/Navbar/Navbar";
import {Profile} from "./componens/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./componens/Dialogs/DialogsContainer";
import {UsersContainer} from "./componens/Users/UsersContainer";


const App: React.FC = () => {

    // const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

{/*dialogs={state.dialogsPage.dialogs}
                                                                             messages={state.dialogsPage.messages}
                                                                             dispatch={props.dispatch}
                                                                             newTextMessage={state.dialogsPage.newTextMessage}*/
}


{/*store={props.store}
                                                                    posts={props.store.getState().profilePage.posts}
                                                                    dispatch={props.dispatch}
                                                                    newPostText={props.store.getState().profilePage.newPostText}*/
}

export default App;
