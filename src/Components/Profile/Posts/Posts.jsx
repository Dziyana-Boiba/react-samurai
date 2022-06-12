import React from 'react'
import st from './Posts.module.css'
import OnePost from './OnePost/OnePost'
import { addPostActionCreator, updateNewPostActionCreator } from '../../Redux/state'




const Posts = (props) => {

    let postElements = props.posts.map( p => <OnePost message={p.message} like={p.like} img={p.img}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div className={st.posts}>
            <textarea 
                onChange={onPostChange}
                value={props.newPostText}
                ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
            {postElements}
        </div>
    )
}

export default Posts