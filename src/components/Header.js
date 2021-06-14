import React, { useState } from 'react';
import "../css/header.scss";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";
import close from "../img/icon-close.svg";
import bg from "../img/bg-pattern-mobile-nav.svg";

const Header = () => 
{
    const [show, setShow] = useState(false);

    return (
        <header className={show ? "show" : "no_show"}>
            <img src={logo} alt="logo" />
            <div className="right_header">
                <img className="mobile" src={bg} alt="mobile" />
                <nav>
                    <ul>
                        <li><a href="#work">How we work</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#account">Account</a></li>
                    </ul>
                </nav>
                <button className="btn plans white_bg">view plans</button>
            </div>
            <img onClick={() => setShow(!show)} src={hamburger} className="hamburger" alt="hamNav" />
            <img onClick={() => setShow(!show)} src={close} className="close" alt="close" />
        </header>
    )
}

export default Header
