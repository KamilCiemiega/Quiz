import React, { useState, useEffect } from 'react';


const ListOfQuestions = props => {

    const [time, setTime] = useState('0');

    useEffect(() => {
        if (time !== 30) {
            var timerInterval = setTimeout(() => {
                setTime(parseInt(time + 1))
            }, 1000);
        } else {
            props.setCurrent(props.questionState.current + 1);
        }
        return () => clearInterval(timerInterval);
    });

    const handleChange = (e) => {
        const selected = parseInt(e.currentTarget.dataset.id);
        props.setCurrent(props.questionState.current + 1);
        if (selected === props.question.correct) {
            props.setScore(props.questionState.score + 1);
        }
    }

    return (
        <div className="question-text flex">
            <div className="question-text-header flex">
                <div className="question-text-header-score flex">
                    <h2>Score</h2>
                    <p>{props.questionState.score}</p>
                </div>
                <div className="question-text-header-score flex">
                    <div className="question-text-header-score-clock"></div>
                    <p style={{ fontSize: '2.5rem', color: '#fd5321' }}>{time}</p>
                </div>
            </div>
            <div className="question-text-title flex">
                <h2> {props.question.question} </h2>
            </div>
            <ul className="question-text-answer">
                <li className="choice-container"
                    data-id="0"
                    onClick={handleChange}>
                    <span className="choice-prefix">A</span>
                    <p className="choice-text">
                        {props.question.answers[0]}
                    </p>
                </li>
                <li className="choice-container"
                    data-id="1"
                    onClick={handleChange}>
                    <span className="choice-prefix">B</span>
                    <p className="choice-text">
                        {props.question.answers[1]}
                    </p>
                </li>
                <li className="choice-container"
                    data-id="2"
                    onClick={handleChange}>
                    <span className="choice-prefix">C</span>
                    <p className="choice-text">
                        {props.question.answers[2]}
                    </p>
                </li>
                <li className="choice-container"
                    data-id="3"
                    onClick={handleChange}>
                    <span className="choice-prefix">D</span>
                    <p className="choice-text">
                        {props.question.answers[3]}
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default ListOfQuestions;