import React from 'react'
import './Footer.css'
import Vector from '../../assets/images/Vector.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-6">
                    <a class="logo" href="#">
                        <span className="logo_img" >
                            <img src={Vector} />
                        </span>

                        <span className="logo_text">
                            My<span className="logo_text_700">VPN</span>
                        </span>
                    </a>
                    <p className="text_s_logo">
                        MyVPN is a private virtual network that has unique features and has high security.
                </p>
                    <div className="row logo_Social_Media">
                        <div className="col-1">
                            <div className="d-flex justify-content-center align-items-center icon-bg-white">
                                <FontAwesomeIcon icon={faFacebookF} color='red' className="FontAwesomeIcon" />
                            </div>

                        </div>
                        <div className="col-1">
                            <div className="d-flex justify-content-center align-items-center icon-bg-white">
                                <FontAwesomeIcon icon={faTwitter} color='red' className="FontAwesomeIcon" />
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="d-flex justify-content-center align-items-center icon-bg-white">
                                <FontAwesomeIcon icon={faInstagram} color='red' className="FontAwesomeIcon" />
                            </div>
                        </div>
                    </div>
                    <p className="MyVPN">©2021MyVPN</p>
                </div>
                <div className="col-2" >
                    <p className="titres">Product</p>
                    <ul className="footerLinks">
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="col-2">
                    <p className="titres">Engage</p>
                    <ul className="footerLinks">
                        <li>LaslesVPN ?</li>
                        <li>FAQ</li>
                        <li>Tutorials</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="col-2">
                    <p className="titres">Earn Money</p>
                    <ul className="footerLinks">
                        <li>Affiliate</li>
                        <li>Become Partner</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
