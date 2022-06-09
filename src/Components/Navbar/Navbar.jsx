import { NavLink } from 'react-router-dom';
import st from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={st.navbar}>
            <ul>
                <li><NavLink to="/profile">My Profile</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><a href="#">Music</a></li>
            </ul>
            
        </div>
    );
}

export default Navbar