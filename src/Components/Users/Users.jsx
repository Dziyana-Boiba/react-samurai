
import React from "react"
import st from "./Users.module.css";
import 'antd/dist/antd.css'
import userPhoto from "../../assets/img/samurai-avatar.jpg"
import { Navigate, NavLink } from "react-router-dom";
import { Pagination } from 'antd';





const Users = (props) => {
    
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let total = pagesCount*10;
        
        /*let pages = [];
            for (let i=1; i <= pagesCount; i++){
                pages.push(i)
            }
        
            let currentPage = props.currentPage;
            let lastPage = currentPage + props.pageSize;
            let firstPage = lastPage - props.pageSize;
            let currentUsers = pages.slice(firstPage, lastPage);
        */


        const onPageSizeChanger = (current, pageSize) => {
            props.onPageSizeChanged(pageSize)
        }
        
        const onPageChanger = (pageNumber) => {
            props.onPageChanged(pageNumber)
        };

        
        return (
        <div id="container" className={st.users}>

                <Pagination 
                    showQuickJumper 
                    showSizeChanger
                    onShowSizeChange={onPageSizeChanger}
                    defaultCurrent={1} 
                    total={total} 
                    pageSize={props.pageSize}
                    current={props.currentPage} 
                    onChange={onPageChanger}  />
                <br />
                
            
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {/*
                <div>
                    <span>{pages[0]}{"< "}  </span>
                    {currentUsers.map(p => {
                            return <span className={props.currentPage === p && st.classSelectPage}
                                onClick={ () => {props.onPageChanged(p)}}>{p}, </span>
                    })}
                    <span>{" >"} {pages[pages.length-1]} </span>
                </div>
            */}
            
            
            {
                props.users.map ( u => <div key={u.id}>
                    <div className={st.usersList}>
                        <div className={st.userInfo}>
                            <div className={st.image}>
                                <NavLink to={"/profile/" + u.id}>
                                    <img 
                                        src={u.photos.small != null ? u.photos.small : userPhoto} 
                                        alt="" 
                                        className={st.img}
                                    />
                                </NavLink>
                            
                            </div>
                            <div className={st.info}>
                                <div className={st.infoOne}>
                                    <div className={st.userName}>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{"u.location.city"}</div>
                                    <div>{"u.location.country"}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            {u.followed 
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} 
                                            onClick={() => {props.unfollow(u.id)} }
                                    >Unfollow</button> 

                                : <button disabled={props.followingProgress.some(id => id === u.id)}
                                            onClick={() => {props.follow(u.id)} }
                                    >Follow</button>
                            }
                        </div>
                    </div>
                    
                </div>)
            }
        </div>
    )
}

    


export default Users


