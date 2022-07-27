
import React from "react"
import Users from "./Users"
import { connect } from "react-redux"
import { setCurrentPage, setPageSize, getUsers, follow, unfollow } from "../../Redux/users-reducer"

import Preloader from "../common/Preloader/Preloader"



class UsersContainer extends React.Component {
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);  
    }
    
    onPageSizeChanged = (pageSize) => {
        
        this.props.setPageSize(pageSize);
        this.props.getUsers(this.props.pageNumber, pageSize)
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
                                    onPageSizeChanged={this.onPageSizeChanged}
                                    follow={this.props.follow}
                                    unfollow={this.props.unfollow}
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
    follow,
    unfollow,
    setCurrentPage,
    setPageSize, 
    getUsers
})(UsersContainer)


