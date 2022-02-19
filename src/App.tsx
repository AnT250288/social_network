import React from 'react';
import './App.css';
import {Navbar} from "./componens/Navbar/Navbar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./componens/Dialogs/DialogsContainer";
import UsersContainer from "./componens/Users/UsersContainer";
import ProfileContainer from "./componens/Profile/ProfileContainer";
import HeaderContainer from "./componens/Header/HeaderContainer";
import {Login} from "./componens/login/Login";


const App: React.FC = () => {

    return (

        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>

    );
}

export default App;
