import * as axios from "axios"
import React from "react"
import Users from "./Users"
import { connect } from "react-redux"
import { followOnClick, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollowOnClick } from "../../Redux/users-reducer"

import Preloader from "../common/Preloader/Preloader"
import { usersAPI } from "../../api/api";
import { toggleFollowingProgress } from "../../Redux/users-reducer"

class UsersContainer extends React.Component {
    
    componentDidMount(){
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then (data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
        usersAPI.getUsers(pageNumber, this.props.pageSize)
                .then (data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
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
                                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                                    followingProgress={this.props.followingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}



export default connect(mapStateToProps,{
    followOnClick,
    unfollowOnClick,
    setUsers,
    setCurrentPage, 
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)


