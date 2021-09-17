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
                <div className="About">
                    <a href="#footer">About</a>
                </div>
                <div className="Portfolio">Portfolio</div>
                <div className="Resume">
                    <a href="C:/Users/rksin/Downloads/Resume-Rohitkumar%20Singh%20(1).pdf">Resume</a>
                </div>
                <div className="Contact">
                    <a href="#footer" id="Contact">Contact</a>
                </div>
                <div className="Blog">Blog</div>
            </div>
        </div>
    )
}

export default Header;
