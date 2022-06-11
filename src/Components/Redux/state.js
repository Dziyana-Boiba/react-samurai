
 
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
          
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("rerender");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0,
            img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
          
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this.state)
    },
    subscribe(observer) {
        
        this._callSubscriber = observer;
    }

}
 

export default store