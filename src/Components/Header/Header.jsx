import st from './Header.module.css';


const Header = () => {
    return (
        <div className={st.header}>
            <header >
                <img 
                    src="https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg" 
                    className={st.logo}
                    alt=""
                ></img>
                <span>Samurai</span>
            </header>
        </div>
    );
}

export default Header