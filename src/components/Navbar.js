import React from 'react'
import {FaFacebook, 
        FaSistrix, 
        FaHome, 
        FaFontAwesomeFlag, 
        FaVideo, 
        FaUser, 
        FaGamepad,
        FaPlus,
        FaFacebookMessenger,
        FaBell,
        FaCaretDown
    } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__first">
            <div className="navbar_first_logo">
                <FaFacebook className="navbar_first_logobar" />
            </div>
            <div className="navbar_first_search">
            <FaSistrix className="navbar_seerch_icon" />
                <input type="text" placeholder="Facebook Search" className="navbar_first_searchbar" />
            </div>
            </div>
            <div className="navbar__middle">
            <span className="middleIcon">
                <FaHome className="navbar_middle_icons" />
            </span>
            <span className="middleIcon">
                <FaFontAwesomeFlag className="navbar_middle_icons" />
                <span className="navbar_notify">3</span>
            </span>
            <span className="middleIcon">
                <FaVideo className="navbar_middle_icons" />
                <span className="navbar_notify">20</span>
            </span>
            <span className="middleIcon">
                <FaUser className="navbar_middle_icons" />
                <span className="navbar_notify">22</span>
            </span>
            <span className="middleIcon">
                <FaGamepad className="navbar_middle_icons" />
                <span className="navbar_notify">5</span>
            </span>
            </div>
            <div className="navbar__last">
                <span className="navbar_last_section">
                    <FaPlus />
                </span>
                <span className="navbar_last_section">
                    <FaFacebookMessenger />
                </span>
                <span className="navbar_last_section">
                    <FaBell />
                </span>
                <span className="navbar_last_section">
                    <FaCaretDown />
                </span>
            </div>
        </div>
    )
}

export default Navbar
