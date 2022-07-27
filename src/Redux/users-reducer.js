import { usersAPI } from "../api/api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS"


/*let initialState =  {
    
    users: [
    {
        id: 1,
        followed: true,
        name: "Diana",
        location: {city: "Minsk", country: "Belarus"},
        status: "I am boss",
        img: "https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg"
    },
    {
        id: 2,
        followed: false,
        name: "Di",
        location: {city: "Minsk", country: "Belarus"},
        status: "Hi, how are you?",
        img: "https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"
    },
    {
        id: 3,
        followed: false,
        name: "Dziyana",
        location: {city: "Aveiro", country: "Portugal"},
        status: "Hi, how are you?",
        img: "https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"
    },
    {
        id: 4,
        followed: true,
        name: "Yuliana",
        location: {city: "Minsk", country: "Belarus"},
        status: "Hi, how are you?",
        img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
    }
    ]
}*/

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) =>  {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }  
                    return u
                })
            }
                      
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users:  action.users
            }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
            
        case TOGGLE_FOLLOWING_PROGRESS:
            return {...state, 
                    followingProgress: action.isProgress 
                        ? [...state.followingProgress, action.userId]
                        : state.followingProgress.filter(id => id !== action.userId)
                    }
                    
        default:
            return state;

    }
    
}


export const followOnClick = (userId) => ({type: FOLLOW, userId})
export const unfollowOnClick = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isProgress, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isProgress, userId})

/*thunk creator*/
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
                .then (data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setUsers(data.items));
                    dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId)); 

        usersAPI.getFollow(userId)         
            .then (data => {
                if(data.resultCode === 0){
                    dispatch(followOnClick(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId)); 

        usersAPI.getUnFollow(userId)         
            .then (data => {
                if(data.resultCode === 0){
                        dispatch(unfollowOnClick(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}



export default usersReducer