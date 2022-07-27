
import { connect } from 'react-redux'
import { updateNewMessageActionCreator, sendMessageActionCreator, toggleActiveAC } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        toggleActiveChat: (chatId) => {
            dispatch(toggleActiveAC(chatId))
        }
            
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer