import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/ChatBubbleOutline';
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt=""></img>
            <label className="header_search">
                <SearchIcon className="searchIcon" /> Search
            </label>

            <div className="header_right">
                <HomeIcon />
                <ChatIcon />
                <ExploreIcon />
                <FavoriteIcon />
                <Avatar alt="" src="" />
            </div>
        </div>
    )
}

export default Header
