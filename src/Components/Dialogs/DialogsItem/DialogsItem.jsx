import { NavLink } from 'react-router-dom';
import st from './DialogsItem.module.css';





const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div  className={props.active ? st.dialogItemActive : st.dialogItem} onClick={() => { props.activeChat(props.id)} }>
            <div className={st.avatar}>
                <img src={props.img} alt=""></img>
                <span className={props.isOnline ? st.isOnlineTrue : st.isOnline}></span>
            </div>
            <div className={st.userInfo}>
                <NavLink to={path} className={st.dialog}>{props.name}</NavLink>
                <span className={st.activeTime}>{props.activeTime}</span>
            </div>        
        </div>
    )
}


export default DialogItem