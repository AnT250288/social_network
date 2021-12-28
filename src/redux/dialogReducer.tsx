import {v1} from "uuid";
import {ActionsType} from "./reduxStore";

export const addMessageActionCreator = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
}
export const updateNewMessageActionCreator = (newMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const
}

export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type MessageType = {
    id: string
    message: string
}



let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych', avatar: ''},
        {id: v1(), name: 'Diona', avatar: 'https://cdn.mos.cms.futurecdn.net/dMZtxyocCF8b7aaEcCMUuG-200-100.jpg.webp'},
        {id: v1(), name: 'Aloy', avatar: 'https://cdn.mos.cms.futurecdn.net/3mZhffvLqhFLqYkSvetxpJ-200-100.jpg.webp'},
        {id: v1(), name: 'Xiao', avatar: 'https://cdn.mos.cms.futurecdn.net/ysaQnEpE8byQtfqEkUiKPN-200-100.jpg.webp'},
        {id: v1(), name: 'Kazuha', avatar: 'https://cdn.mos.cms.futurecdn.net/xdTiPL2qHGABSEA4RRy9dK-200-100.jpg.webp'},
        {id: v1(), name: 'Klee', avatar: 'https://cdn.mos.cms.futurecdn.net/vbv5xVSqi9qvdywXsf5uR9-200-100.jpg.webp'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'How is your studies?'},
        {id: v1(), message: 'Yo!'}
    ] as Array<MessageType>,
    newTextMessage: ""
}

export type DialogReducerInitialStateType = typeof initialState

export const dialogReducer = (state = initialState, action: ActionsType): DialogReducerInitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: v1(),
                message: action.messageText
            }
            return {
                ...state,
                newTextMessage: '',
                messages: [...state.messages, newMessage]
            };
        case    "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newTextMessage: action.newMessageText
            }
        default:
            return state
    }
}
