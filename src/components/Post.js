import React from 'react'
import { Avatar } from '@material-ui/core';
import './Post.css'

function Post({
    username,
    profilePic,
    location,
    postPic,
    caption,
    likes,
}) {
    return (
        <div className="post">
            <div className="user-info">
                <Avatar className="profilePic" src={profilePic}/>
                <p className="username">{username}</p>
                <p>{location}</p>
                <img src={postPic} alt={postPic}></img>
            </div>
        </div>
    )
}

export default Post
