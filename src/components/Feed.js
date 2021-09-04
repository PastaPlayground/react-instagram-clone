import React from 'react'
import './Feed.css'
import Post from './Post.js'

function Feed() {
    return (
        <div className="feed">
            <Post 
            profilePic=""
            username="intoxicatedloves"
            location="Singapore"
            />
        </div>
    )
}

export default Feed
