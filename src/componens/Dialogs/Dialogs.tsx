import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogReducerInitialStateType} from "../../redux/dialogReducer";

type PropsType = {
    dialogsPage: DialogReducerInitialStateType
    updateNewMessage: (text: string) => void
    addMessage: (message: string) => void
}
export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                           avatar={d.avatar}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addMessage = () => {
        //props.dispatch(addMessageActionCreator(props.newTextMessage))
        props.addMessage(props.dialogsPage.newTextMessage)
    }
    const onDialogsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            const text = e.currentTarget.value
            props.updateNewMessage(text)
            //props.dispatch(updateNewMessageActionCreator(text))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <div>
                    <div>
                        <div>
                            <textarea placeholder={"Enter your message"} onChange={onDialogsChange}
                                      value={props.dialogsPage.newTextMessage}/>
                        </div>
                        <div>
                            <button className={s.button} onClick={addMessage}>Add message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}