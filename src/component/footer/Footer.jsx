import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    PIYUSH MAURYA  |  +919717439537  |  mauryapiyush2002@gmail.com  |  piyushmaurya_se20b8_73@dtu.ac.in
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://leetcode.com/piyush14_6/" target="blank">
                            <SiLeetcode className="ico"/>
                        </a>
                        
                    </span>
                    <span className="icon">
                        <a href="https://github.com/piyush28511" target="blank">
                            <FaGithub className="ico"/>
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://github.com/piyush28511" target = "blank">
                            <FaTwitter className="ico"/>
                        </a>
                        
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/piyush-maurya-36100b128/" target="blank">
                            <FaLinkedin className="ico"/>
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;