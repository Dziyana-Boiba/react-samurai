

import st from './MyProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'


const MyProfileInfo = (props) => {

    return (
        <div className={st.profileInfo}>
            <img src="https://img.freepik.com/free-vector/samurai-style-ink-carracter_293852-93.jpg?w=2000" alt=""></img>
            <div className={st.profileTextInfo}>
                <div className={st.profileStatusItem}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className={st.privetInfo}>
                    Date of Birth: 1 january <br />
                    City: Minsk <br />
                    Education: BSU'15 <br />
                    Web Site: <br />

                </div>
            </div>

            
            
            
        </div>
    )
}

export default MyProfileInfo