import React from 'react';
import "../css/about.scss";
import snappy from "../img/icon-snappy-process.svg";
import people from "../img/icon-people-first.svg";
import affordable from "../img/icon-affordable-prices.svg";
import work from "../img/bg-pattern-how-we-work-desktop.svg";

const About = () => 
{
    return (
        <section className="about">
            <div className="container">
                <div className="line black_line"></div>
                <h1>We're different</h1>
                <div className="grid_about">
                    <div className="about1">
                        <img src={snappy} alt="snappy" />
                        <h3>Snappy Process</h3>
                        <p>Our application process can be completed in minutes, not hours. Don’t get 
                        stuck filling in tedious forms.</p>
                    </div>
                    <div className="about1">
                        <img src={affordable} alt="affordable" />
                        <h3>Affordable Prices</h3>
                        <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
                        but we still offer the best coverage possible.</p>
                    </div>
                    <div className="about1">
                        <img src={people} alt="people" />
                        <h3>People First</h3>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                        sure you’re covered when you need it.</p>
                    </div>
                </div>
                <div className="how_we_work">
                    <img src={work} alt="how_we_work" />
                    <div className="flex_work">
                        <h1>Find out more about how we work</h1>
                        <div className="work_btn">
                            <button>How We Work</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
