import { profileAPI, usersAPI } from "../api/api";
import userPhoto from "../assets/img/samurai-avatar.jpg";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS"


let initialState =  {
    newPostText: "",
    posts: [
    {
        id: 1,
        message: "Hello",
        like: 10,
        dislike: 0, 
        img: "https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg"
    },
    {
        id: 2,
        message: "Hi, how are you?",
        like: 15,
        dislike: 0,
        img: "https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"
    },
    {
        id: 3,
        message: "Hello my friends",
        like: 110,
        dislike: 0,
        img: "https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"
    },
    {
        id: 4,
        message: "What's up bro?",
        like: 1,
        dislike: 0,
        img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
    }
    ],
    profile: null,
    status: ""
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
                dislike: 0,
                img: userPhoto
            }
                        
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]

            };
        
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
       usersAPI.getUserData(userId)
            .then( data => {
                dispatch(setUserProfile(data))
            }) 
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then( response => {
                dispatch(setStatus(response.data))
            })
                
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then( response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
                
            })
                
    }
}

export default profileReducer