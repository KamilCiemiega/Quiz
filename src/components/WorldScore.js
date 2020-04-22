import React, { useState } from 'react';

const WorldScore = props => {

    // const scoreboard = JSON.parse(localStorage.getItem('results') || []);
    // console.log(scoreboard)

    return(
        <div className="score flex">
            <div className="score-img"></div>
                <h2>TOP 10 Scoreboard</h2>
            <div className="score-results flex">
                <div className="score-results-summary flex">
                    <p>1st</p>
                    <p>Tomas</p>
                    <p>222</p>
                </div>
            </div>
        </div>
    );
}

export default WorldScore;