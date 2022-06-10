import React from 'react'
import MyProfileInfo from './ProfileInfo/MyProfileInfo'
import Posts from './Posts/Posts'
import st from './Profile.module.css'

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
            <Posts posts={props.state.posts}/>
        </div>
    )
}

export default Profile