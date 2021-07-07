import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type SidebarType = {}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage:DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Diona'},
            {id: 3, name: 'Paimon'},
            {id: 4, name: 'Syao'},
            {id: 5, name: 'Ikar'},
            {id: 6, name: 'Kli'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello!'},
            {id: 3, message: 'How is your studies?'},
            {id: 4, message: 'Yo!'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'it\'s my first post', likesCount: 12}
        ]

    },
    sidebar: {}
}



ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
