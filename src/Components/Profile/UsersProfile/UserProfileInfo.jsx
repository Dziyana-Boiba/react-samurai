import Preloader from '../../common/Preloader/Preloader';
import st from './UserProfile.module.css';
import ProfileStatus from '../ProfileInfo/ProfileStatus'

const UserProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={st.userProfileInfo}>
            
            <div className={st.userInfo}>
                <img src={props.profile.photos.small} alt=""></img>
                <div className={st.privetInfo}>
                    Name: {props.profile.fullName} <br/>
                    About Me: {props.profile.aboutMe}
                </div>
                <div className={st.profileStatusItem}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>

        </div>
    )
}

export default UserProfileInfo