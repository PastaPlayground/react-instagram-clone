import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";

function Post({
  username,
  profilePic,
  location,
  postPic,
  caption,
  likes,
  timestamp,
}) {
  return (
    <div className="post">
      <div className="user-info">
        <Avatar className="profilePic" src={profilePic} />
        <p className="username">{username}</p>
        <p>{location}</p>
      </div>
      <img src={postPic} alt={postPic}></img>

      <div className="buttons">
        <div className="buttons-left">
          <FavoriteBorderIcon /> {likes}
          <ChatBubbleOutlineRoundedIcon />
          <SendRoundedIcon />
        </div>
        <div className="buttons-right">
          <BookmarkBorderRoundedIcon />
        </div>
      </div>

      <div>
        <div className="caption">
          <p>{caption}</p>
        </div>

        <div className="comment">
          <Avatar fontSize="10px" />
          <p>Add a comment</p>
        </div>
        <div className="timestamp">
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
