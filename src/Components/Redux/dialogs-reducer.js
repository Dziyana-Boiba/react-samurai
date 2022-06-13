
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            let bodyMessage = state.newMessageText;
            state.messages.push({id: 5, message: bodyMessage});
            state.newMessageText = "";
            return state;
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export const updateNewMessageActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_TEXT,
            newText: text
        }
    )
}

export default dialogsReducer