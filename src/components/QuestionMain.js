import React, { Component } from 'react';

export default class Main extends Component {

        state = {
            score: 0,
            current: 1
        }
    

    setCurrent = (current) => {
        this.setState({current});
    }

    setScore = (score) => {
        this.setState({score});
    }

    render() {
        // if (this.state.current > dataArray.length) {
        //     return (
        //         <div>
        //             <div className="flex-box">
        //                 <Results dataArray={dataArray}
        //                          setScore={this.setScore} setCurrent={this.setCurrent} {...this.state}/>

        //             </div>
        //             <div className="iconFooter flex-box">

        //                 <i class="fab fa-facebook-square"></i>
        //                 <i className="fab fa-instagram"></i>
        //                 <i class="fab fa-twitter-square"></i>
        //             </div>
        //             <Footer/>
        //         </div>
        //     );
        // }
        return (
            <div className="container">
                {/* <QuestionCounter className="questionCounter" dataArray={dataArray}
                                 setCurrent={this.setCurrent} {...this.state} />
                <ListOfQuestions dataArray={dataArray} setScore={this.setScore}
                                 setCurrent={this.setCurrent} {...this.state} />
                <Footer/> */}
                hello from main
            </div>
        );
    }
}