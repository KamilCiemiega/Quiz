import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Result = props => {

    const [score, setScore] = useState([])
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        // const obj = {
        //     nickName: data.nickName,
        //     score: props.score
        // }
        // const arr = []
        // arr.push(obj)
        // console.log(arr)
        setScore([...score,{
            nickName: data.nickName,
            score: props.score
        }])
        localStorage.setItem('results', JSON.stringify(score));
    }

    return (
        <div className="result flex">
            <div className="result-main flex">
                <div className="result-main-header flex">
                    <div className="result-main-header-cup"></div>
                    <div className="result-main-header-text flex">
                        <h2>Completed !</h2>
                    </div>
                </div>
                <div className="result-main-score flex">
                    <p>Score</p>
                    <p style={{ color: '#30a360' }}>{props.score}</p>
                </div>
                <form
                    className="result-main-form flex"
                    onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder=" Save your score"
                        name="nickName"
                        ref={register({ required: true })}
                    >
                    </input>
                    {errors.nickName &&
                        <div className="error flex">
                            {errors.nickName && "nickName is required !"}
                        </div>
                    }
                    <button
                        type="submit"
                        className="btn-save"
                    >
                        Save
                    </button>
                </form>
                <span></span>
                <button className="btn-retry"><a href="/">Retry</a></button>
            </div>
        </div>
    );
}

export default Result