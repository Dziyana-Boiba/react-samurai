
import st from './MessagesItem.module.css';



const MessageItem = (props) => {
    return(
        <div className={st.chatContentItem}>
            <div  className={st.message}>{props.message}</div>
            <div className={st.chatInfo}>
                <span>16 min ago</span>
                <span>Seen 2.05PM</span>
            </div>
            <div className={st.avatar}>
                <img src={props.img} alt=""></img>
                                        
            </div>
        </div>
        
    )
}

export default MessageItem