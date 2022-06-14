import React from 'react';
import st from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessagesItem/MessagesItem';





const Dialogs = (props) => {

    let state = props.dialogsPage
   
    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessage(text);
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
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
            
        </div>
    );
}

export default Dialogs