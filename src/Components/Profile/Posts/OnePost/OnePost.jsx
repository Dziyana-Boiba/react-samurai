import st from './OnePost.module.css'
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
import moment from 'moment';
import React, { createElement, useState } from 'react';



  

  
const OnePost = (props) => {
    const [likes, setLikes] = useState(0);
     const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
    const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{props.like}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{props.dislike}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
    return (
        <div className={st.onePost}>
            {/*<img src={props.img} alt=""></img>
            <p>{props.message}</p>
            <span>like: {props.like}</span>*/}
            <Comment
                className={st.comment}
                actions={actions}
                author={"Samurai"}
                avatar={<Avatar src={props.img} alt="" className={st.avatar} />}
                content={<p>{props.message}</p>}
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
                />
            
        </div>
    )
}

export default OnePost