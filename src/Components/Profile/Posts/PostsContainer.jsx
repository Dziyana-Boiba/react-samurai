
import { connect } from 'react-redux'
import Posts from './Posts'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer'




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }  
    }
}

const PostsContainer = connect (mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer