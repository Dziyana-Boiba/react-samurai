import React from 'react';
import st from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessagesItem/MessagesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'




const Dialogs = (props) => {

    let state = props.dialogsPage
   
    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessage(text);
    }

    let activeChat = (chatId) => {
        props.toggleActiveChat(chatId)
    }

    let dialogElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img} activeChat={activeChat} isOnline={d.isOnline} active={d.active} activeTime={d.activeTime} />);

    let messageElements = state.messages.map( m => <MessageItem message={m.message}/>)

    return (
        <div className={st.dialogs}>

            <div className={st.chatBox}>
                <div className={st.chatList}>
                    <button className={st.newConver}>
                        <FontAwesomeIcon icon={faPlus} className={st.icon}/>
                        <span>New conversation</span>
                    </button>
                    
                    
                    <div  className={st.dialogItems}>
                        {dialogElements}
                    </div>
                </div>


                <div className={st.chatContent}>
                        <div  className={st.messageItems}>
                            <div className={st.contentHeader}>
                                <div className={st.currentUserChat}>
                                    <div className={st.avatar}>
                                        <img src={props.img} alt=""></img>
                                        <span className={props.isOnline ? st.isOnlineTrue : st.isOnline}></span>
                                    </div>
                                    <div className={st.userInfo}>
                                        {props.name}
                                        <span className={st.activeTime}>{props.activeTime}</span>
                                    </div> 
                                </div>
                                
                            </div>
                            
                            <div className={st.contentBody}>
                                <div>{messageElements}</div> 
                            </div>
                            
                                     
                            <div className={st.contentFooter}>
                                <div className={st.addFiles}>
                                    <button>
                                        <FontAwesomeIcon icon={faPlus} className={st.icon}/>
                                    </button>
                                </div>
                                <div>
                                    <textarea 
                                        onChange={onMessageChange} 
                                        value={state.newMessageText} 
                                        placeholder="Type your message">
                                    </textarea>
                                </div>
                                <div><button onClick={onSendMessage}>Send</button></div>
                            </div>
                        </div>
                </div>
            </div>
           
            
        </div>
    );
}

export default Dialogs