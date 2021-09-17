import React from 'react'
import './footer.css';
const Footer = () => {
    return (
        <div className="footerWrapper" id="footer">
            <div className="upperPart">
                <div className="location">
                    <h3 id="address">Address</h3>
                    <br/>
                    <p>Sai Vihar Society, <br/>Opp. St. Xaviers School,<br/>
                        Vapi,Valsad,Gujarat,396191.
                    </p>
                </div>   
                <div className="socialMedia">
                    <h3>Contact Me</h3>
                    <span className="gmail">
                        <a href="mailto:innoavativerk@gmail.com">
                            <img src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png" id="gmail-img" />
                        </a>
                        
                    </span>
                    <span className="linkedin">
                        <a href="https://www.linkedin.com/in/rohit-singh-478476153/">
                            <img src="https://mpng.subpng.com/20190221/acl/kisspng-logo-email-linkedin-computer-icons-brand-linkedin-logo-free-vector-download-freelogovecto-5c6f1d250ddc52.2829051915507858290568.jpg" id="linkedin-img"/>
                        </a>
                    </span>

                    <span className="github">
                        <a href="https://github.com/RohitSingh104">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBwmX7bGlQY6PbWvVOqyeR8uLmSafku8sCA&usqp=CAU" id="github-img" />
                        </a>
                    </span>

                    <div className="contact-no">
                        <h3>Mobile</h3>
                        <h3 className="no">+91 9173716191</h3>
                        <h3 className="no">+91 7984644738</h3>
                    </div>
                </div>
                <div className="about">
                    <h3 id="about">About Me</h3>
                    <p id="about-para">I am a frontend developer , <br/>can create beautiful websites<br/>and ready to collaborate with <br/>freelance team  and also ready to join<br/> IT organization as an employee.</p>
                </div>
            </div>
            <div className="lowerPart" >
                <h4 id="name">Rohit Singh (Software Engineer)</h4>
                <p id="copyright"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsP8wppjhFHn1gr5xzq7aJK2f4iVhyMwQ-bDV4cVtCJ9Zmd-BoUq4st1d7jgR0uQuttgE&usqp=CAU" id="copyright-img"/> All Rights Reserved.</p>

            </div>
        </div>
    )
}

export default Footer;
