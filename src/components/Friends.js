import React from 'react'
import { Avatar } from '@material-ui/core';
import './Friends.css'

function Friends({
    profilePic,
    username,
}) {
    return (
        <div className="friends">
            <Avatar className="profilePic" src={profilePic} />
            <p>{username}</p>
        </div>
    )
}

export default Friends
