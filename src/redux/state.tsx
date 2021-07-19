
let renderEntireTree = (state: RootStateType) => {
    console.log("Sate was changed")
}


export let store = {
    state: {
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
            ],
            newPostText: ""
        },
    },
    renderEntireTree (state: RootStateType) {
        console.log("Sate was changed")
    },
    addPost () {
        const newPost: NewPostType = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost as PostType)
        state.profilePage.newPostText = '';
        renderEntireTree(state)
    },

}

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
export type NewPostTextType = {
    newPostText: string
}
export type NewPostType = {
    id: number
    message?: string
    likesCount: number
}

type SidebarType = {}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText?: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export const state: RootStateType = {
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
        ],
        newPostText: ""
    },
}
export const addPost = () => {
    const newPost: NewPostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost as PostType)
    state.profilePage.newPostText = '';
    renderEntireTree(state)
}
export const updateNewPostText = (newText?: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    renderEntireTree = observer
}
