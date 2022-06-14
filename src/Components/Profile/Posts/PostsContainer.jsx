import React from 'react'

import Posts from './Posts'
import { addPostActionCreator, updateNewPostActionCreator } from '../../Redux/profile-reducer'




const PostsContainer = (props) => {

    let state = props.store.getState();
   
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Posts 
            updateNewPostText={onPostChange} 
            addPost={addPost} 
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    )
}

export default PostsContainer