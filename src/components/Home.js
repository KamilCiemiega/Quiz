import React from 'react';
import { Link } from 'react-router-dom';

const home = props => {
    return (
        <div className="home-container flex">
            <h1>QUIZ</h1>
            <div className="home-container-box flex">
                <Link to='/pytania'>
                    <div className="home-container-box-choice flex">
                        <i class="fas fa-play-circle"></i>
                        <p>Play quiz</p>
                    </div>
                </Link>
                <div className="home-container-box-choice flex">
                    <i class="fas fa-chart-bar"></i>
                    <p>World score</p>
                </div>
            </div>
            <div className="home-container-options flex">
                <div className="home-container-options-box flex">
                    <i class="fas fa-cog"></i>
                    <p>Settings</p>
                </div>
                <div className="home-container-options-box flex">
                    <i class="fas fa-info-circle"></i>
                    <p>About</p>
                </div>
            </div>
        </div>
    );
}

export default home;