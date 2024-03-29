import { NavLink } from 'react-router-dom';
import st from './Header.module.css';


const Header = (props) => {
    return (
        <div className={st.header}>
            
                <div className={st.name}><span>SAMURAI.by</span></div>

                <div>
                    {/*<img 
                    src="https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg" 
                    className={st.logo}
                    alt=""
                    ></img>*/}
                </div>

                <div className={st.loginBlock}>
                    {props.isAuth 
                        ? <div className={st.loginUser}>
                            <span>{props.login} - </span><div><button className={st.btn}>Logout</button></div>
                        </div> 
                        : <NavLink to={"/login"}><button className={st.btn}>Login</button></NavLink>
                    }
                </div>
                
           
        </div>
    );
}

export default Header