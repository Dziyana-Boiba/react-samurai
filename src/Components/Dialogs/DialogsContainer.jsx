
import { connect } from 'react-redux'
import { sendMessageActionCreator, toggleActiveAC } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        },
        toggleActiveChat: (chatId) => {
            dispatch(toggleActiveAC(chatId))
        }
            
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer