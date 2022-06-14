import React from 'react'

import Posts from './Posts'
import { addPostActionCreator, updateNewPostActionCreator } from '../../Redux/profile-reducer'
import StoreContext from '../../../StoreContext';




const PostsContainer = (props) => {

    

    return (
        <StoreContext.Consumer> 
            {
                (store) => {
                    let state = store.getState();
                
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostActionCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <Posts 
                            updateNewPostText={onPostChange} 
                            addPost={addPost} 
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                        />
                    )
                }
                    
                
            }
            
        </StoreContext.Consumer>
        
    )
}

export default PostsContainer