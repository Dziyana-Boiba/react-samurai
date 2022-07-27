import React from 'react';
import st from './HomePage.module.css';


const Home = (props) => {
    return (
        <div className={st.home}>
            <div>
                <img 
                    alt=""
                    src="https://questionjapan.com/wp-content/uploads/2019/07/Samurai-Banner.png"
                    className={st.img}></img>
            </div>
            
        </div>
    )
}

export default Home