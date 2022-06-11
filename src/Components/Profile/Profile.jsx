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
            <Posts 
                posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost} 

                />
        </div>
    )
}

export default Profile