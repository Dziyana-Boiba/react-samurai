import React from 'react'
import MyProfileInfo from './ProfileInfo/MyProfileInfo'

import st from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer'
import UserProfileInfo from './UsersProfile/UserProfileInfo'

const Profile = (props) => {
    return (
        <div className={st.profile}>
            
            <UserProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            
            <MyProfileInfo status={props.status} updateStatus={props.updateStatus} />
            
            <PostsContainer />
        </div>
    )
}

export default Profile