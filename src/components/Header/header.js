import React from 'react'
import './header.css';
const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="symbol">
                <h2><span id="R">R</span>S</h2>
            </div>
            <div className="menu">
                <div className="Home">
                    <a href="#">Home</a>
                </div>
                <div className="About">About</div>
                <div className="Portfolio">Portfolio</div>
                <div className="Resume">Resume</div>
                <div className="Contact">Contact</div>
                <div className="Blog">Blog</div>
            </div>
        </div>
    )
}

export default Header;
