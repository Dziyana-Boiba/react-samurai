
import st from './MessagesItem.module.css';



const MessageItem = (props) => {
    return(
        <div  className={st.message}>{props.message}</div>
    )
}

export default MessageItem