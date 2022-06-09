import st from './OnePost.module.css'

const OnePost = (props) => {
    return (
        <div className={st.onePost}>
            <img src={props.img}></img>
            <p>{props.message}</p>
            <span>like: {props.like}</span>
            
            
        </div>
    )
}

export default OnePost