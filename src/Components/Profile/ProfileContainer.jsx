import * as axios from "axios"
import React from 'react'
import { connect } from "react-redux"
import {setUserProfile} from "../Redux/profile-reducer"
import Profile from './Profile'
import { useParams } from "react-router-dom"

class ProfileContainer extends React.Component {

    
    componentDidMount(){
        
        let userId = this.props.param.userId
        if(!userId) {
            userId = null;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then( response => {
                this.props.setUserProfile(response.data)
            })
    }

    render(){
        return(
            <div> 
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

//wrapper to use react router's v6 hooks in class component (to use HOC pattern, like in router v5)
//let URLDataContainerComponent = withRouter(ProfileContainer);

const WithRouterByUseParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}


export default connect(mapStateToProps, {setUserProfile})(WithRouterByUseParams)