
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState =  {
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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
            
        case ADD_POST:
           
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
                img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
            }
                        
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]

            };
        default:
            return state;

    }
    
}


export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: text
        }
    )
}

export default profileReducer