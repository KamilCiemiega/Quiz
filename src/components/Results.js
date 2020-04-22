import React, { useState } from 'react';

const Result = props => {

    const [value, setValue] = useState({nickName:'',score:'',err:''});

    const handleChange = event => {
        setValue({
            nickName:event.target.value,
            score:props.score
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(value.nickName.length == 0){
            setValue({err:'Enter the name'})
        }
        localStorage.setItem('results', JSON.stringify(value));
        
        console.log(localStorage)
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
                    onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder=" Save your score"
                        value={value.nickName}
                        onChange={handleChange}
                    >
                    </input>
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