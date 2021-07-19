import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessagesType} from "../../redux/state";


type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        const text = newMessageElement.current?.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <div>
                            <textarea ref={newMessageElement}></textarea>
                        </div>
                        <div>
                            <button onClick={addMessage}>Add message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}