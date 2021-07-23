import React from 'react';
import mySelf from "../images/myself.jpg"

export default function AboutMe() {
    return (
        <div className="card">
            <div className="card-content">
                <img src={mySelf} target="_html" alt="Me in China" />
                <div className="card-text">
                    <h3>I love to create websites that are creative and meet the needs of my customers.</h3>
                    <p>I have learnt the basics of:</p>
                    <ul className="applicationsList">
                        <li>HTML, CSS, javascript and Bulma as a CSS framework;</li>
                        <li>Displaying images, use of the anchor tag to jump to an external website</li>
                        <li>APIs from third parties such as google and openweather</li>
                        <li>Server processing - including encription of passwords, use of sequelize for undertaking database
                            queries</li>
                        <li>Client/Server applictions - to store application data in databases</li>
                    </ul>
                    <a href="https://susanne85.github.io/prework-about-me/"
                        target="_html" alt="My information">
                        More aboutMe
                    </a>
                </div>
            </div>
        </div>
    )
}