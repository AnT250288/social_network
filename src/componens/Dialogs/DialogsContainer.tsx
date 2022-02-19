import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {
    addMessageActionCreator,
    DialogReducerInitialStateType,
    updateNewMessageActionCreator
} from "../../redux/dialogReducer";
import {compose, Dispatch} from "redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogReducerInitialStateType
}

type mapDispatchToPropsType = {
    updateNewMessage: (text: string) => void
    addMessage: (message: string) => void
}

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessage: (text: string) => {
            if (text) {
                dispatch(updateNewMessageActionCreator(text))
            }
        },
        addMessage: (message: string) => {
            dispatch(addMessageActionCreator(message))
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
*/

// type PropsType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessageType>
//     newTextMessage: string
//     dispatch: (action: ActionsType) => void
// }
/*export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage
            const addMessage = () => {
                store.dispatch(addMessageActionCreator(state.newTextMessage))
            }
            const onDialogsChange = (text: string) => {
                if (text) {
                    store.dispatch(updateNewMessageActionCreator(text))
                }
            }

            return <Dialogs
                dialogs={state.dialogs}
                messages={state.messages}
                newTextMessage={state.newTextMessage}
                updateNewMessage={onDialogsChange}
                addMessage={addMessage}
            />
        }
        }
    </StoreContext.Consumer>
}*/