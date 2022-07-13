import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

 
let store = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
            {
                id: 1,
                message: "Hello",
                like: 10,
                img: "https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg"
            },
            {
                id: 2,
                message: "Hi, how are you?",
                like: 15,
                img: "https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"
            },
            {
                id: 3,
                message: "Hello my friends",
                like: 110,
                img: "https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"
            },
            {
                id: 4,
                message: "What's up bro?",
                like: 1,
                img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
            }
            ]
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("rerender");
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }
    

}
 



export default store