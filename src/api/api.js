import * as axios from "axios"


const instance = axios.create({
    
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/", 
        headers: {
        "API-KEY": "79ef3aaf-6023-464f-b953-a94776b4157b"
        }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
}
}


export const followAPI = {
    getFollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getUnFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
};



export const myAPI = {
    getMyData(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
}
}




