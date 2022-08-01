import React from 'react';
import st from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessagesItem/MessagesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons'




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

    

    let chatIdNum = state.activeChatId;
    let activeChatInfo = state.dialogs.filter( d => d.id === chatIdNum);
    let activeChatMessages = state.messages.filter( m => m.id === chatIdNum);

    let dialogElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img} activeChat={activeChat} isOnline={d.isOnline} active={d.active} activeTime={d.activeTime} />);

    

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
                    {chatIdNum 
                    
                        ? <div  className={st.messageItems}>
                            <div className={st.contentHeader}>
                                <div className={st.currentUserChat}>
                                    <div className={st.avatar}>
                                        
                                        <img src={activeChatInfo[0].img} alt=""></img>
                                        <span className={activeChatInfo[0].isOnline ? st.isOnlineTrue : st.isOnline}></span>
                                    </div>
                                    <div className={st.userInfo}>
                                        {activeChatInfo[0].name}
                                        <span className={st.activeTime}>{activeChatInfo[0].activeTime}</span>
                                    </div> 
                                </div>
                                
                            </div>
                            
                            <div className={st.contentBody}>
                                <div>
                                    {activeChatMessages[0].chat.map( m => 
                                        <MessageItem message={m.message} key={m.key} type={m.type} img={activeChatInfo[0].img}/>
                                    )}
                                </div> 
                            </div>
                            
                                     
                            <div className={st.contentFooter}>
                                <div className={st.sendMessage}>
                                    <div className={st.addFiles}>
                                        <button>
                                            <FontAwesomeIcon icon={faPlus} className={st.iconAdd}/>
                                        </button>
                                    </div>
                                    <div className={st.typeText}>
                                        <textarea 
                                            onChange={onMessageChange} 
                                            value={state.newMessageText} 
                                            placeholder="Type your message">
                                        </textarea>
                                    </div>
                                    <div className={st.btnSend}>
                                        <button onClick={onSendMessage}>
                                            <FontAwesomeIcon icon={faPaperPlane} className={st.iconSend}/>
                                            <span>Send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        : <div className={st.chooseChat}>
                            <p>Please, choose the chat</p>
                            </div>
                        }
                        
                </div>
            </div>
           
            
        </div>
    );
}

export default Dialogs