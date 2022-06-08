import st from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={st.navbar}>
            <ul>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Music</a></li>
            </ul>
            
        </div>
    );
}

export default Navbar