import * as axios from "axios"
import React from "react"

import Users from "./Users"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../Redux/users-reducer"


class UsersContainer extends React.Component {
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        
                .then (response => {
                    
                    this.props.setUsersOn(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        
                .then (response => {
                    
                    this.props.setUsersOn(response.data.items);
                })
    }
    

    render() {

        return <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollowOnClick={this.props.unfollowOnClick}
                followOnClick={this.props.followOnClick}/>
    
    }

    
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return{
        followOnClick: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowOnClick: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsersOn: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }, 
        setTotalUsersCount: (totalNumber) => {
            dispatch(setTotalUsersCountAC(totalNumber))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


