import React from 'react'
import st from './Posts.module.css'
import OnePost from './OnePost/OnePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faVideoCamera, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'antd';
import userPhoto from "../../../assets/img/samurai-avatar.jpg";
import { Field, reduxForm } from 'redux-form'



const Posts = (props) => {

    let postElements = props.posts.map( p => <OnePost message={p.message} like={p.like} dislike={p.dislike} img={p.img}/> );

    let addPostSubmit = (data) => {
        props.addPost(data.newPostText);
    }


    return (
        <div className={st.posts}>
            
            <div className={st.box}>
                <div className={st.image}>
                    <img 
                        alt=""
                        src={userPhoto}
                        className={st.img}
                    ></img>
                </div>
                <div className={st.main}>
                    <AddPostReduxForm onSubmit={addPostSubmit}/>
                </div>
            </div>
            
            {postElements}
        </div>
    )
}


const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostText"} placeholder={"What's on your mind?"} />
                                   
            <div className={st.icons}>
                <FontAwesomeIcon icon={faPhotoVideo} className={st.icon}/>
                 <span>Photo</span>
                <FontAwesomeIcon icon={faVideoCamera} className={st.icon}/>
                <span>Live</span>
                <FontAwesomeIcon icon={faUserFriends} className={st.icon}/>
                <span>Tag Friends</span>
                <button type="submit" >
                    Add Post
                </button>
            </div>
                        
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPost'
})(AddPostForm)




export default Posts