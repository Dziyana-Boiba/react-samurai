import { NavLink } from 'react-router-dom';
import st from './Header.module.css';


const Header = (props) => {
    return (
        <div className={st.header}>
            <header >
                <img 
                    src="https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg" 
                    className={st.logo}
                    alt=""
                ></img>
                <span className={st.name}>Samurai</span>
                <div className={st.loginBlock}>
                    {props.isAuth 
                        ? props.login 
                        : <NavLink to={"/login"}>Login</NavLink>
                    }
                </div>
            </header>
        </div>
    );
}

export default Header