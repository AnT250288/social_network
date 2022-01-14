import {v1} from "uuid";
import {addPostActionCreator, profileReducer, updateNewPostMessageActionCreator} from "./profileReducer";
import {addMessageActionCreator, dialogReducer, updateNewMessageActionCreator} from "./dialogReducer";
import {follow, unFollow} from "./usersReducer";
/*

type StoreType = {
    _state: RootStateType
    _onChange: (_state: RootStateType) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostMessageActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych', avatar: ''},
                {
                    id: v1(),
                    name: 'Diona',
                    avatar: 'https://cdn.mos.cms.futurecdn.net/dMZtxyocCF8b7aaEcCMUuG-200-100.jpg.webp'
                },
                {
                    id: v1(),
                    name: 'Aloy',
                    avatar: 'https://cdn.mos.cms.futurecdn.net/3mZhffvLqhFLqYkSvetxpJ-200-100.jpg.webp'
                },
                {
                    id: v1(),
                    name: 'Xiao',
                    avatar: 'https://cdn.mos.cms.futurecdn.net/ysaQnEpE8byQtfqEkUiKPN-200-100.jpg.webp'
                },
                {
                    id: v1(),
                    name: 'Kazuha',
                    avatar: 'https://cdn.mos.cms.futurecdn.net/xdTiPL2qHGABSEA4RRy9dK-200-100.jpg.webp'
                },
                {
                    id: v1(),
                    name: 'Klee',
                    avatar: 'https://cdn.mos.cms.futurecdn.net/vbv5xVSqi9qvdywXsf5uR9-200-100.jpg.webp'
                }
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Hello!'},
                {id: v1(), message: 'How is your studies?'},
                {id: v1(), message: 'Yo!'}
            ],
            newTextMessage: ""
        },
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 0},
                {id: v1(), message: 'it\'s my first post', likesCount: 12}
            ],
            newPostText: ""
        },
    },
    _onChange() {
        console.log("State was changed")
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._onChange(this._state)
    }
}

type DialogType = {
    id: string
    name: string
    avatar: string
}
type MessagesType = {
    id: string
    message: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}
type NewPostType = {
    id: string
    message?: string
    likesCount: number
}
type NewMessageType = {
    id: string
    message: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newTextMessage: string
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
type SidebarType = {}
*/
