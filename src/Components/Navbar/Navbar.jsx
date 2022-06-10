import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Navbar.module.css';

const activeLink = ({isActive}) => isActive ? st.active : st.item

const Navbar = () => {
    return (
        <div className={st.navbar}>
            <ul>
                <li className={st.item}><NavLink to="/profile" className={activeLink}>My Profile</NavLink></li>
                <li className={st.item}><NavLink to="/dialogs" className={activeLink}>Dialogs</NavLink></li>
                
            </ul>
            
        </div>
    );
}

export default Navbar