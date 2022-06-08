import Posts from './Posts'
import st from './Profile.module.css'

const Profile = () => {
    return (
        <div className={st.content}>
            <div>
                <img 
                    
                    src="https://questionjapan.com/wp-content/uploads/2019/07/Samurai-Banner.png"
                    className={st.img}></img>
            </div>
            <Posts />
        </div>
    )
}

export default Profile