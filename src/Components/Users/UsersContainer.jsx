import * as axios from "axios"
import React from "react"

import Users from "./Users"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../Redux/users-reducer"

import Preloader from "../common/Preloader/Preloader"

class UsersContainer extends React.Component {
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        
                .then (response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsersOn(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        
                .then (response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsersOn(response.data.items);
                })
    }
    

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                                    totalUsersCount={this.props.totalUsersCount}
                                    pageSize={this.props.pageSize}
                                    currentPage={this.props.currentPage}
                                    users={this.props.users}
                                    onPageChanged={this.onPageChanged}
                                    unfollowOnClick={this.props.unfollowOnClick}
                                    followOnClick={this.props.followOnClick}
            />
        </>
                
    
    }

    
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


