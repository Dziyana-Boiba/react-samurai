import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import './../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faComments, faUserFriends, faAddressCard, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const activeLink = ({isActive}) => isActive ? "active" : "item"


const Navbar = () => {
    
    return (
        <div>
            <input type="checkbox" id="check" className='checkNav'/>
            <div className="navbar">
            
            <div className="profileImg">
            
                <img 
                    alt=""
                    src="https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg"
                    className="img"
                ></img>
                <p className="name">Shimazu</p>
            </div>

            <ul>
                <li className="item">
                    <NavLink to="/profile" className={activeLink}>
                        <FontAwesomeIcon icon={faAddressCard} className="iconLink"/>
                            <span>My Profile</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to="/dialogs" className={activeLink}> 
                        <FontAwesomeIcon icon={faComments} className="iconLink"/>
                            <span>Messages</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to="/users" className={activeLink}>
                        <FontAwesomeIcon icon={faUserFriends} className="iconLink"/>
                            <span>Users</span>
                    </NavLink>
                </li>
                
            </ul>
            <div className="slider">
                
                <label for="check">
                    <FontAwesomeIcon icon={faChevronCircleLeft} className="icon"/>
                </label>
                
            </div>
        </div>
        </div>
        
    );
}

export default Navbar