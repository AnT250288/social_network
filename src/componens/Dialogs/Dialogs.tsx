import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    dialog: Array<DialogType>
    message: Array<MessagesType>
}


export const Dialogs = (props: DialogsType) => {


    let dialogsElements = props.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.message.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}