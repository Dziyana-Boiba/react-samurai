import { NavLink } from 'react-router-dom';
import st from './DialogsItem.module.css';


const activeDialog = ({isActive}) => isActive ? st.active : st.dialog

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div  className={st.dialog}>
                    <NavLink to={path} className={activeDialog}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem