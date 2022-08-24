import { authAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA";
const RESET_AUTH_DATA = "samurai-network/auth/RESET-AUTH-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true  
            }
             
        case RESET_AUTH_DATA:
            return {
                ...state,
                ...initialState
            }

        default:
            return state;

    }
    
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, payload: {userId, email, login}})
const resetAuthData = () => ({type: RESET_AUTH_DATA})

export const getAuthUserData = () => async (dispatch) => {
        
    let response = await authAPI.getMyData()        
        
    if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login));
    }
}



export const userLogin = (email, password, rememberMe) => async (dispatch) => {
        
    let response = await authAPI.login(email, password, rememberMe)        
            
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData());
    }
}


export const userLogout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()        
           
        if(response.data.resultCode === 0){
                    
            dispatch(resetAuthData());
        }
            
        
    }
}


export default authReducer