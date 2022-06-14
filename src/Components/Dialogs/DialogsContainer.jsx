import React from 'react';
import StoreContext from '../../StoreContext';

import { updateNewMessageActionCreator, sendMessageActionCreator } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

   

    

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text));
                    }

                    return (
                        <Dialogs 
                            sendMessage={sendMessage} 
                            updateNewMessage={onMessageChange} 
                            dialogsPage={state.dialogsPage} 
                        />
                    )
                }
            }
        </StoreContext.Consumer>
        
    );
}

export default DialogsContainer