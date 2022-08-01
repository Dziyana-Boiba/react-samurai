
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const TOGGLE_ACTIVE = "TOGGLE_ACTIVE"

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Samurai",
            active: false,
            isOnline: false,
            activeTime: "32 min ago",
            img: "https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg"
        },
        {
            id: 2,
            name: "Samurai",
            active: false,
            isOnline: true,
            activeTime: "",
            img: "https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"
        },
        {
            id: 3,
            name: "Samurai",
            active: false,
            isOnline: true,
            activeTime: "",
            img: "https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"
        },
        {
            id: 4,
            name: "Samurai",
            active: false,
            isOnline: false,
            activeTime: "3 min ago",
            img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
        },
        {
            id: 5,
            name: "Samurai",
            active: false,
            isOnline: false,
            activeTime: "32 min ago",
            img: "https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg"
        },
        {
            id: 6,
            name: "Samurai",
            active: false,
            isOnline: true,
            activeTime: "",
            img: "https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"
        },
        {
            id: 7,
            name: "Samurai",
            active: false,
            isOnline: true,
            activeTime: "",
            img: "https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"
        },
        {
            id: 8,
            name: "Samurai",
            active: false,
            isOnline: false,
            activeTime: "3 min ago",
            img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
        }  
  
    ],
    messages: [
        {id: 1,  chat: [
            {
                key: 1,
                type: "me",
                message: "Hi Samurai. You might not remember me but we met at Tom's Christmas party last year. I'm Samurai."
            },
            {
                key: 2,
                type: "other",
                message: "hi, yes, I remember you"
            },
            {
                key: 3,
                type: "me",
                message: "The day is almost over! Do you have any interesting plans for the evening?"
            },
            {
                key: 4,
                type: "other",
                message: "No, I don't"
            },
            {
                key: 5,
                type: "me",
                message: "Let's go to the party"
            }
        ]} ,
        {id: 2,  chat: [
            {
                key: 1,
                type: "other",
                message: "hi"
            },
            {
                key: 2,
                type: "other",
                message: "how are you?"
            },
            {
                key: 3,
                type: "me",
                message: "Fine, and you?"
            },
            {
                key: 4,
                type: "other",
                message: "Fine too"
            }
        ]}, 
        {id: 3,  chat: [
            {
                key: 1,
                type: "me",
                message: "hi, I'm going home"
            },
            {
                key: 2,
                type: "other",
                message: "hi, me too"
            },
            {
                key: 3,
                type: "other",
                message: "what's the plan?"
            },
            {
                key: 4,
                type: "me",
                message: "I don't have"
            },
            {
                key: 5,
                type: "other",
                message: "Let's go to the gym"
            }
        ]}, 
        {id: 4,  chat: [
            {
                key: 1,
                type: "me",
                message: "Hello"
            },
            {
                key: 2,
                type: "other",
                message: "Cood morning"
            }
        ]}, 
        {id: 5,  chat: [
            {
                key: 1,
                type: "me",
                message: "hiiii"
            },
            {
                key: 2,
                type: "other",
                message: "hi, how are you?"
            },
            {
                key: 3,
                type: "me",
                message: "Fine, and you?"
            },
            {
                key: 4,
                type: "other",
                message: "Awesome"
            },
            {
                key: 5,
                type: "me",
                message: "What's your puppy's name?"
            },
            {
                key: 6,
                type: "other",
                message: "Ralf"
            }
        ]}, 
        {id: 6,  chat: [
            {
                key: 1,
                type: "other",
                message: "hi"
            },
            {
                key: 2,
                type: "other",
                message: "hi, how are you?"
            },
            {
                key: 3,
                type: "me",
                message: "Fine, and you?"
            },
            {
                key: 4,
                type: "other",
                message: "Awesome"
            },
            {
                key: 5,
                type: "me",
                message: "How about this weather?"
            }
        ]}, 
        {id: 7,  chat: [
            {
                key: 1,
                type: "me",
                message: "Good morning! We always have coffee at the same time but we've never spoken before. My name is Samurai"
            },
            {
                key: 2,
                type: "other",
                message: "Hello, how are you today? My name is Samurai too. I'm still learning English so please let me know if I make any mistakes"
            },
            {
                key: 3,
                type: "me",
                message: "Ok"
            }
        ]}, 
        {id: 8, chat: [
            {
                key: 1,
                type: "me",
                message: "hi"
            },
            {
                key: 2,
                type: "other",
                message: "hi, how are you?"
            },
            {
                key: 3,
                type: "me",
                message: "Fine, and you?"
            },
            {
                key: 4,
                type: "other",
                message: "Awesome"
            },
            {
                key: 5,
                type: "me",
                message: "Cool, what's the plan for today?"
            }
        ]}
         
    
    ],
    activeChatId: null,
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
                messages: state.messages.map( (d) =>  {
                    if(d.id === state.activeChatId) {
                        let newChat = d.chat.concat({
                            key: 6,
                            type: "me",
                            message: bodyMessage
                        })
                        return { ...d, chat: newChat}
                    }
                    return {...d}
                })
                
            };

        case TOGGLE_ACTIVE: 
            return {
                ...state,
                dialogs: state.dialogs.map( (d) =>  {
                    if(d.id === action.chatId) {
                        return {...d, active: true}
                    }  
                    return {...d, active: false}
                }),
                activeChatId: action.chatId
            }

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

export const toggleActiveAC = (chatId) => ({type: TOGGLE_ACTIVE, chatId})

export default dialogsReducer