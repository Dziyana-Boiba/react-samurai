import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Navbar.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faComments, faUserFriends, faIdCardAlt, faChevronCircleLeft, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const activeLink = ({isActive}) => isActive ? st.active : st.item


const Navbar = () => {
    
    return (
        <div>
            
            <div className={st.navbar}>
                <input type="checkbox" id="check"/>
            <div className={st.profileImg}>
            
                <img 
                    alt=""
                    src="https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg"
                    className={st.img}
                ></img>
                <p className={st.name}>Shimazu</p>
            </div>

            <ul>
                <li className={st.item}>
                    <NavLink to="/home" className={activeLink}>
                        <FontAwesomeIcon icon={faLaptopCode} className={st.iconLink}/>
                            <span>Home</span>
                    </NavLink>
                </li>
                <li className={st.item}>
                    <NavLink to="/profile" className={activeLink}>
                        <FontAwesomeIcon icon={faIdCardAlt} className={st.iconLink}/>
                            <span>My Profile</span>
                    </NavLink>
                </li>
                <li className={st.item}>
                    <NavLink to="/dialogs" className={activeLink}> 
                        <FontAwesomeIcon icon={faComments} className={st.iconLink}/>
                            <span>Messages</span>
                    </NavLink>
                </li>
                <li className={st.item}>
                    <NavLink to="/users" className={activeLink}>
                        <FontAwesomeIcon icon={faUserFriends} className={st.iconLink}/>
                            <span>Users</span>
                    </NavLink>
                </li>
                
            </ul>
            <div className={st.slider}>
                
                <label for={st.check}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} className={st.icon}/>
                </label>
                
            </div>
        </div>
        </div>
        
    );
}

export default Navbar