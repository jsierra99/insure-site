import React from 'react';
import "../css/home.scss";
import family from "../img/image-intro-desktop.jpg";
import right from "../img/bg-pattern-intro-right-desktop.svg";
import left from "../img/bg-pattern-intro-left-desktop.svg";

const Home = () => 
{
    return (
        <section className="home">
            <img className="right" src={right} alt="right_bg" />
            <img className="left" src={left} alt="left_bg" />
            <div className="container">
                <div className="grid_home">
                    <div className="home1">
                        <div className="white_line line"></div>
                        <h1>Humanizing your insurance.</h1>
                        <p>Get your life insurance coverage easier and faster. We blend our expertise 
                        and technology to help you find the plan that’s right for you. Ensure you 
                        and your loved ones are protected.</p>
                        <button className="btn plans purple_bg">view plans</button>
                    </div>
                    <img className="family" src={family} alt="grid_image" />
                </div>
            </div>
        </section>
    )
}

export default Home
