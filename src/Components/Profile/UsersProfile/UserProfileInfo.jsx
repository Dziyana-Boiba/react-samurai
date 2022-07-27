import Preloader from '../../common/Preloader/Preloader'
import st from './UserProfile.module.css'

const UserProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={st.userInfo}>
            
            
                <img src={props.profile.photos.small} alt=""></img>
                <div className={st.privetInfo}>
                    {props.profile.fullName}
                    {props.profile.aboutMe}
                </div>
            
        </div>
    )
}

export default UserProfileInfo