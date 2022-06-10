
import st from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import MessageItem from './MessagesItem/MessagesItem';





const Dialogs = (props) => {

    

    let dialogElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = props.messages.map( m => <MessageItem message={m.message}/>)

    return (
        <div className={st.dialogs}>
           
            
            <div  className={st.dialogItems}>
                {dialogElements}
            </div>

            <div  className={st.messageItems}>
                {messageElements}           
            </div>
            
        </div>
    );
}

export default Dialogs