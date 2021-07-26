import React from 'react';
import { Link } from 'react-router-dom'
import MyResume from '../docs/resume.pdf'
export default function Resume() {

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-text">
                    <h2>Resume</h2>
                    <h3>Download my<span> </span>
                    <Link to={MyResume} target="_blank" download='Susannes-Resume'>Resume</Link>
                    </h3>
                </div>
                <div className="card-text">
                    <h2>Front-End Proficiencies</h2>
                    <ul>
                        <li>Hyper Text Transfer Protocol (HTTP)</li>
                        <li>Javascript</li>
                        <li>Cascading Style Sheets (CSS)</li>
                        <li>Bulma as a CSS Framework</li>
                        <li>Jquery</li>
                        <li>WEB and Third Party APIs</li>
                        <li>Responsive Design</li>
                        <li>Bootstrip</li>
                        <li>React</li>
                    </ul>
                    <h2>Back-End Proficiencies</h2>
                    <ul>
                        <li>Node</li>
                        <li>MySQL</li>
                        <li>Client Server Processing</li>
                        <li>MongoDB</li>
                        <li>IndexDB</li>
                        <li>Progress Web Applications</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
