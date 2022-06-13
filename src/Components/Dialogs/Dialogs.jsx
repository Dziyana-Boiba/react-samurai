import React from 'react';
import st from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessagesItem/MessagesItem';
import { updateNewMessageActionCreator, sendMessageActionCreator } from '../Redux/dialogs-reducer';




const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    //let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    let dialogElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = state.messages.map( m => <MessageItem message={m.message}/>)

    return (
        <div className={st.dialogs}>
           
            
            <div  className={st.dialogItems}>
                {dialogElements}
            </div>

            <div  className={st.messageItems}>
                <div>{messageElements}</div>          
                <div>
                    <div><textarea 
                        onChange={onMessageChange} 
                        value={state.newMessageText} 
                        placeholder="Enter your message">
                        </textarea>
                    </div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
            
        </div>
    );
}

export default Dialogs