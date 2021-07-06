import React from 'react';
import './App.css';
import {Header} from "./componens/Header/Header";
import {Navbar} from "./componens/Navbar/Navbar";
import {Profile} from "./componens/Profile/Profile";
import {Dialogs} from "./componens/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogItem} from "./componens/Dialogs/DialogItem/DialogItem";

const App = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'How is your studies?'},
        {id: 4, message: 'Yo!'}
    ]
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>*/}

                    <Route path={'/dialogs'} render={ () => <Dialogs dialog={dialogs} message={messages}/> } />
                    <Route path={'/profile'} render={ () => <Profile/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
