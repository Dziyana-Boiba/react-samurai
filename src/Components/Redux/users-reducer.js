
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"


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
    isFetching: false
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

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
            
        default:
            return state;

    }
    
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer