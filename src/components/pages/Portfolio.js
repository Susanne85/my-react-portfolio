import React from 'react';
import myPassword from '../images/dreamtime_picture.jpg';
import myWeather from '../images/weather.jpg';
import myAppointment from '../images/app-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faWalking } from '@fortawesome/free-solid-svg-icons';

const myNavStyle = { flexBasis: '49%', justifyContent: 'space-evenly' };
const myGithubStyle = { fontSize: '25px', marginLeft: '10px' };
const myIconStyle = { fontSize: '50px' };
export default function Portfolio() {
    return (

        <div className="d-flex flex-wrap ">
            <div className="p-2 m-2 card-content" style={myNavStyle}>
                <a href="https://susanne85.github.io/generatePasswordModal/" target="_html">
                    <img src={myPassword} alt="Generate Random Password" />
                </a>
                <a href="https://github.com/Susanne85/generatePasswordModal/" target="_html" style={myGithubStyle}>
                    Generate Random Password - Click to view GITHUB repository
                </a>
                <h2>Random Password Generator</h2>
                <h3> The user selects the required character sets and length for the generated
                    password. It concatenates all the requested character sets into one string and then uses the random math function to generate a password. It is implemented with the following features:</h3>
                <ul>
                    <li>Modal html structure</li>
                    <li>error checking to ensure that at least one character set is selected and that
                        the password length is between 8and 128</li>
                    <li>utilises random math function to generate password. </li>
                </ul>
                <h4>Hover and click on the picture or click here to execute the application</h4>
                <h4>
                    <a href="https://susanne85.github.io/generatePasswordModal/" target="_html">
                        Generate Random Password
                    </a>
                </h4>
            </div>

            <div className="p-2 m-2 card-content" style={myNavStyle}>
                <a href="https://susanne85.github.io/weatherDashboard/" target="_html">
                    <img src={myWeather} alt="Weather Forecast" />
                </a>
                <a href="https://github.com/Susanne85/weatherDashboard" target="_html" style={myGithubStyle}>
                    Weather Forecast - Click to view GITHUB repository
                </a>
                <h2>Weather Forecast for a city or town in Australia.</h2>
                <h3>This application displays the current weather and five day forecast for a city or town in Australia. The application utilises the following functionality:
                </h3>
                <ul>
                    <li>Openweather API for retrieving the current weather details for a location in Australia</li>
                    <li>Use of promises to retrieve data from third parties</li>
                    <li>Using local storage to save the towns/cities which have been previously search and retrieving the data and displaying to the user.</li>
                </ul>
                <h4>Hover and click on the picture or click here to execute the application </h4>
                <h4>
                    <a href="https://susanne85.github.io/weatherDashboard/" target="_html">
                        Weather Forecast
                    </a>
                </h4>
            </div>

            <div className="p-2 m-2 card-content" style={myNavStyle}>
                <a href="https://powerful-scrubland-18358.herokuapp.com/" target="_html" alt="Technical Blog" >
                    <FontAwesomeIcon icon={faBlog} style={myIconStyle} />
                </a>
                <a href="https://github.com/Susanne85/cmsblog" target="_html" style={myGithubStyle}>
                    Technical Blog - Click to view GITHUB repository
                </a>
                <h2>Technical Blog</h2>
                <h3>This application allows a person to view blogs and comments about technical concepts.  If a user logins into the site then they will be able to add a comment to an existing blog that they created or that was created by another user.:
                </h3>
                <ul>
                    <li>HTML</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>Client and Server requests and responses</li>
                </ul>
                <h4>Hover and click on the picture or click here to execute the application</h4>
                <h4>
                    <a href="https://powerful-scrubland-18358.herokuapp.com/" target="_html">
                        Technical Blog
                    </a>
                </h4>
            </div>
            <div className="p-2 m-2 card-content" style={myNavStyle}>
                <a href="https://afternoon-beyond-55572.herokuapp.com" target="_html">
                    <img src={myAppointment} alt="Easee Appointment Tracker" />
                </a>
                <a href="https://github.com/ShaneCurtis84/Easy-Appointment-Tracker-2.0/" target="_html" style={myGithubStyle}>
                    Easy Appointment Tracker - Click to view GITHUB repository
                </a>
                <h2>Easy Appointment Tracker</h2>
                <h3>This application allows a user to quickly enter information about an
                    appointment. The application utilises the following functionality:</h3>
                <ul>
                    <li>Bulma as the CSS framework</li>
                    <li>Google's Placeholder API for auto completing of an address.</li>
                    <li>Google's map location API for displaying an address.</li>
                </ul>
                <h4>Hover and click on the picture or click here to execute the application</h4>
                <h4>
                    <a href="https://afternoon-beyond-55572.herokuapp.com"
                        target="_html">
                        Easee Appointment Tracker</a>
                </h4>
            </div>
            <div className="p-2 m-2 card-content" style={myNavStyle}>
                <a href="https://my-workout-2021.herokuapp.com" target="_html" alt="Workout">
                    <FontAwesomeIcon icon={faWalking} style={myIconStyle} />
                </a>
                <a href="https://github.com/Susanne85/workout-tracker" target="_html" style={myGithubStyle}>
                    Workout Tracker - Click to view GITHUB repository
                </a>
                <h2>Workout Tracker</h2>
                <h3>This is an applicaion in which a user can track their fitness workouts.  The user is able to record multiple exercise workouts in a data recording different data depending on the type of workout.  The application will also allow a user to update, delete or obtain summary information about their workout.  From the dashboard the user will be able to retrieve statistics on their last seven workouts:</h3>
                <ul>
                    <li>Epress</li>
                    <li>Mongo Database</li>
                    <li>Deployment to Heroku</li>
                </ul>
                <h4>Hover and click on the picture or click here to execute the application </h4>
                <h4>
                    <a href="https://my-workout-2021.herokuapp.com"
                        target="_html">
                        Workout Tracker</a>
                </h4>
            </div>
            <div className="p-2 m-2 card-content" style={myNavStyle}>
                <a href="enigmatic-shore-08718.herokuapp.com" target="_html" alt="Note Taker">
                    <FontAwesomeIcon icon={faWalking} style={myIconStyle} />
                </a>
                <a href="https://github.com/Susanne85/budget-tracker" target="_html" style={myGithubStyle}>
                   Budget Tracker - Click to view GITHUB repository
                </a>
                <h2>Budget Tracker </h2>
                <h3>This is an applicaion in which a user can track their deposits and expenses.  They are able to add these details regardless of whether they have access to the internet.  It they do not have access to the internet they can continue to add deposit and expense details and when internet access is available then their account details will be updated in the correct order.:</h3>
                <ul>
                    <li>Express</li>
                    <li>Javascript</li>
                    <li>Mondgo Database</li>
                    <li>Progessive Web Application</li>
                </ul>
                <h4>Hover and click on the picture or click here to execute the application </h4>
                <h4>
                    <a href="enigmatic-shore-08718.herokuapp.com"
                        target="_html">
                        Budget Tracker</a>
                </h4>
            </div>
        </div >
    )
}
