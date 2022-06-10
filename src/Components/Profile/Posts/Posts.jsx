import React from 'react'
import st from './Posts.module.css'
import OnePost from './OnePost/OnePost'

const Posts = (props) => {

    

    let postElements = props.posts.map( p => <OnePost message={p.message} like={p.like} img={p.img}/> )

    return (
        <div className={st.posts}>
            <textarea></textarea>
            <button>Add post</button>
            {postElements}
        </div>
    )
}

export default Posts