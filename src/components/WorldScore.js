import React, { useState,useEffect } from 'react';

const WorldScore = props => {

    const [results, setResults] = useState([{score:3,score:4,score:2}]);

    useEffect(()=> {
        try{
            // const scoreboard = JSON.parse(localStorage.getItem('results') || []);
            // setResults(...results,scoreboard);
            results.sort((a,b) => b.score - a.score);
        }
        catch{
            console.log('Something went wrong !')
        }
    },[])
    // function useLocalStorage(key, initialValue) {
    //     // State to store our value
    //     // Pass initial state function to useState so logic is only executed once
    //     const [storedValue, setStoredValue] = useState(() => {
    //       try {
    //         // Get from local storage by key
    //         const item = window.localStorage.getItem(key);
    //         // Parse stored json or if none return initialValue
    //         return item ? JSON.parse(item) : initialValue;
    //       } catch (error) {
    //         // If error also return initialValue
    //         console.log(error);
    //         return initialValue;
    //       }
    //     });

    return(
        <div className="score flex">
            <div className="score-img"></div>
                <h2>TOP 10 Scoreboard</h2>
            <div className="score-results flex">
                <div className="score-results-summary flex">
                    <i className="fas fa-user"></i>
                    {results.map((item) => {

                    })

                    }
                    <p>1st</p>
                    <p>Points:222</p>
                    <p>NickName:Tomas</p>
                </div>
            </div>
        </div>
    );
}

export default WorldScore;