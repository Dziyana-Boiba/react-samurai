
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Diana"},
        {id: 2, name: "Di"}, 
        {id: 3, name: "Anna"}, 
        {id: 4, name: "Yuliana"}  
  
    ],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "How are you?"}, 
        {id: 3, message: "Anna"}, 
        {id: 4, message: "Yuliana"}  
    
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
            
        case SEND_MESSAGE:
            let bodyMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 5, message: bodyMessage}]
            };

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