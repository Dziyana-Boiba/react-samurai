import React from 'react'
import st from './Posts.module.css'
import OnePost from './OnePost/OnePost'




const Posts = (props) => {

    let postElements = props.posts.map( p => <OnePost message={p.message} like={p.like} img={p.img}/> );

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
            <textarea 
                onChange={onPostChange}
                value={props.newPostText}
                ref={newPostElement}></textarea>
            <button onClick={onAddPost}>Add post</button>
            {postElements}
        </div>
    )
}

export default Posts