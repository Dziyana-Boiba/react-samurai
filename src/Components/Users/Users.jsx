
import React from "react"
import st from "./Users.module.css"
import userPhoto from "../../assets/img/samurai-avatar.jpg"

const Users = (props) => {
    
    
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i)
        }
        let curPage = props.currentPage;
        let curPageFirst = ((curPage - 10)< 0) ? 0 : curPage - 10;
        let curPageLast = curPage + 10;
        let slicedPages = pages.slice(curPageFirst, curPageLast);

        return (
        <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            <div>
            <span>{pages[0]}{"< "}  </span>
            {slicedPages.map(p => {
                    return <span className={props.currentPage === p && st.classSelectPage}
                        onClick={ () => {props.onPageChanged(p)}}>{p}, </span>
            })}
            <span>{" >"} {pages[pages.length-1]} </span>
            </div>
            
            {
                props.users.map ( u => <div key={u.id}>
                    <div>
                        <div>
                            <img 
                                src={u.photos.small != null ? u.photos.small : userPhoto} 
                                alt="" 
                                className={st.img}
                            />
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => {props.unfollowOnClick(u.id)} }>Unfollow</button> 
                                : <button onClick={() => {props.followOnClick(u.id)} }>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

    


export default Users


