import React from 'react';
import mySelf from "../images/myself.jpg"

export default function AboutMe() {
    return (
        <div className="card">
            <div className="card-content">
                <img src={mySelf} target="_html" alt="Me in China" />
                <h3>I love to create websites that are creative and meet the needs of my customers.</h3>
                <h4>I have worked in the Mining industry for six years and the computer industry for twenty years.</h4>
                <h4>Over the last ten years I have been teaching English in China from preschoolers to adults and also managed to accommodate travelling to England, Ireland, Costa Rica and Spain in that time.</h4>
                <h4>Although working in the computing industry for twenty years, this is my first foray into Web design and Client/Server technologies.</h4>
                <h4>It has been a very exciting, frustrating and amazing journey of learning the very basics of HTML, Javascript and CSS, and then journeying into the first stages of developing Progressive Web Applicaions and the use of React</h4>
            </div>
        </div >
    )
}