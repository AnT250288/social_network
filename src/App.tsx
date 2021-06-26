import React from 'react';
import './App.css';
import {Header} from "./componens/Header/Header";
import {Navbar} from "./componens/Navbar/Navbar";
import {Profile} from "./componens/Profile/Profile";
import {Dialogs} from "./componens/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialog'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
