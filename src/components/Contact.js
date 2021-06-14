import React from 'react';
import "../css/contact.scss";
import footer from "../img/bg-pattern-footer-desktop.svg";
import logo from "../img/logo.svg";
import twitter from "../img/icon-twitter.svg";
import instagram from "../img/icon-instagram.svg";
import facebook from "../img/icon-facebook.svg";
import pinterest from "../img/icon-pinterest.svg";

const Contact = () => 
{
    return (
        <section className="contact">
            <img className="footer" src={footer} alt="footer" />
            <div className="container">
                <div className="flex_contact">
                    <img src={logo} alt="logo" />
                    <div className="social_media">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
                <div className="line_bg"></div>
                <div className="grid_contact">
                    <div className="contact1">
                        <h4>our company</h4>
                        <ul className="ul_contact">
                            <li><a>how we work</a></li>
                            <li><a>why insure?</a></li>
                            <li><a>view plans</a></li>
                            <li><a>reviews</a></li>
                        </ul>
                    </div>
                    <div className="contact1">
                        <h4>help me</h4>
                        <ul className="ul_contact">
                            <li><a>faq</a></li>
                            <li><a>terms of use</a></li>
                            <li><a>privacy policy</a></li>
                            <li><a>cookies</a></li>
                        </ul>
                    </div>
                    <div className="contact1">
                        <h4>contact</h4>
                        <ul className="ul_contact">
                            <li><a>sales</a></li>
                            <li><a>support</a></li>
                            <li><a>live chat</a></li>
                        </ul>
                    </div>
                    <div className="contact1">
                        <h4>others</h4>
                        <ul className="ul_contact">
                            <li><a>careers</a></li>
                            <li><a>press</a></li>
                            <li><a>licenses</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
