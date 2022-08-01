
import st from './MessagesItem.module.css';



const MessageItem = (props) => {
    return(
        <div className={st.chatContentItem}>
            <div className={props.type==="me" ? st.right : st.left}>
                <div  className={st.message}>
                    {props.message}
                    <div className={st.chatInfo}>
                        <span>16 min ago</span>
                        <span>Seen 2.05PM</span>
                    </div>
                </div>
                
                <div className={st.avatar}>
                    <img src={props.type==="me" 
                        ? "https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg" 
                        : props.img} alt="">
                    </img>
                </div>
            </div>
            
        </div>
        
    )
}

export default MessageItem