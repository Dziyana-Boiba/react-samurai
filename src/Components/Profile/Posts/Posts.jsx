import st from './Posts.module.css'
import OnePost from './OnePost/OnePost'

const Posts = () => {
    return (
        <div className={st.posts}>
            <textarea></textarea>
            <button>Add post</button>
            <OnePost message="Hello" like="10" img="https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg" />
            <OnePost message="Hi, how are you?" like="20" img="https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"/>
            <OnePost message="Hello my friends" like="5" img="https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"/>
            <OnePost message="What's up bro?" like="0" img="https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"/>
        </div>
    )
}

export default Posts