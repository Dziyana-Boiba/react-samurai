
import React from 'react'
import { connect } from "react-redux"
import {getUserProfile, getStatus, updateStatus} from "../../Redux/profile-reducer"
import Profile from './Profile'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withRouter } from '../../hoc/withRouter'
import { compose } from 'redux'


class ProfileContainer extends React.Component {

    
    componentDidMount(){
        
        let userId = this.props.param.userId
        if(!userId) {
            userId = null;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
            
    }

    render(){

        return(
            
            <div> 
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

//wrapper to use react router's v6 hooks in class component (to use HOC pattern, like in router v5)
//let URLDataContainerComponent = withRouter(ProfileContainer);

/*const WithRouterByUseParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}*/


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)