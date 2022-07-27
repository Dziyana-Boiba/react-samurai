import React from 'react'
import st from './Posts.module.css'
import OnePost from './OnePost/OnePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faVideoCamera, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'antd';
import userPhoto from "../../../assets/img/samurai-avatar.jpg";



const Posts = (props) => {

    let postElements = props.posts.map( p => <OnePost message={p.message} like={p.like} dislike={p.dislike} img={p.img}/> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                    <form action='' method='POST'>
                        <textarea 
                            onChange={onPostChange}
                            value={props.newPostText}
                            ref={newPostElement}
                            placeholder="What's on your mind?"
                        >
                        </textarea>
                        
                        <div className={st.icons}>
                            <FontAwesomeIcon icon={faPhotoVideo} className={st.icon}/>
                            <span>Photo</span>
                            <FontAwesomeIcon icon={faVideoCamera} className={st.icon}/>
                            <span>Live</span>
                            <FontAwesomeIcon icon={faUserFriends} className={st.icon}/>
                            <span>Tag Friends</span>
                            <Button onClick={onAddPost} type="primary" shape="round"  size='small'>
                                Add Post
                            </Button>
                        </div>
                        
                    </form>
                </div>
            </div>
            
            
            


            {postElements}
        </div>
    )
}

export default Posts