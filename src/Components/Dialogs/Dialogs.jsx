import { NavLink } from 'react-router-dom';
import st from './Dialogs.module.css';


const activeDialog = ({isActive}) => isActive ? st.active : st.dialog

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div  className={st.dialog}>
                    <NavLink to={path} className={activeDialog}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return(
        <div  className={st.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={st.dialogs}>
           
            
            <div  className={st.dialogItems}>

                <DialogItem name="Diana" id="1"/>
                <DialogItem name="Di" id="2"/>
                <DialogItem name="Anna" id="3"/>
                <DialogItem name="Yuliana" id="4"/>

                
                
            </div>

            <div  className={st.messageItems}>
                <MessageItem message="Hi!"/>
                <MessageItem message="How are you?"/>
                <MessageItem message="Hello"/>
                <MessageItem message="All good"/>
                                
            </div>
            
        </div>
    );
}

export default Dialogs