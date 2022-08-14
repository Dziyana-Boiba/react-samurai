import * as axios from "axios";


const instance = axios.create({
    
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/", 
        headers: {
        "API-KEY": "cd50a1a0-3d2a-4617-894a-bb91b55cd1f5"
        }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getUnFollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getUserData(userId){
        return instance.get(`profile/${userId}`)
            .then( response => {
                return response.data
            })
    }
}




export const authAPI = {
    getMyData(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
}
}






