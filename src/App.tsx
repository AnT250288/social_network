import React from 'react';
import './App.css';
import {Navbar} from "./componens/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./componens/Dialogs/DialogsContainer";
import {UsersContainer} from "./componens/Users/UsersContainer";
import ProfileContainer from "./componens/Profile/ProfileContainer";
import HeaderContainer from "./componens/Header/HeaderContainer";


const App: React.FC = () => {

    // const state = props.store.getState();

    return (

        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </div>
        </div>

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
