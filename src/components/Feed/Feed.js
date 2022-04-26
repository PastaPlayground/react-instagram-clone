import React from "react";
import "./Feed.css";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <Post
        profilePic=""
        username="intoxicatedloves"
        location="Singapore"
        caption="Wonderful day at the beach with my friends"
        timestamp="30 mins ago"
      />
    </div>
  );
}

export default Feed;
