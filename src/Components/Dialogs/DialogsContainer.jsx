import React from 'react';

import { updateNewMessageActionCreator, sendMessageActionCreator } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

    let state = props.store.getState();

    //let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    

    return (
        <Dialogs 
            sendMessage={sendMessage} 
            updateNewMessage={onMessageChange} 
            dialogsPage={state.dialogsPage} />
    );
}

export default DialogsContainer