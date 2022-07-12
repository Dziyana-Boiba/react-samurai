import React from 'react'
import MyProfileInfo from './ProfileInfo/MyProfileInfo'

import st from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer'
import UserProfileInfo from './ProfileInfo/UserProfileInfo'

const Profile = (props) => {
    return (
        <div className={st.profile}>
            <div>
                <img 
                    alt=""
                    src="https://questionjapan.com/wp-content/uploads/2019/07/Samurai-Banner.png"
                    className={st.img}></img>
            </div>
            <MyProfileInfo />
            <UserProfileInfo profile={props.profile}/>
            <PostsContainer />
        </div>
    )
}

export default Profile