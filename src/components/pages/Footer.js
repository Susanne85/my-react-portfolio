import React from 'react-dom'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/Navbar.css';

const footerStyle = { fontSize: '30px', margin:'10px', justifyContent: "space-evenly", };
const iconStyle = { fontSize: '30px', marginRight: '10px' };

export default function Footer() {
    return (
        <div className="d-flex flex-wrap card-content p-2 m-2"  style={footerStyle}>
            <Link to="//m.facebook.com/susanne.bilney"
                target="_html" alt="FaceBook" >
                <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
                Facebook
            </Link>
            <Link to="//linkedin.com/mwlite/in/susanne-bilney-138696123"
                target="_html" alt="Linkedin">
                <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                Linkedin
            </Link>
            <Link to="//github.com/Susanne85"
                target="_html" alt="Github" >
                <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                Github
            </Link>
        </div >
    )
}