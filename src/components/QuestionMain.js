import React, { useEffect, useReducer } from 'react';
import ListOfQuestions from './ListOfQuestions';
import Results from './Results';
import ErrorModal from './ErrorModal';


const Main = props => {
    const httpReducer = (curHttpState, action) => {
        switch (action.type) {
          case 'SEND':
            return { ...curHttpState,
                loading: true, 
                error: null 
            };
          case 'RESPONSE':
            return {...curHttpState, loading: false };
          case 'ADD':
            return {...curHttpState, data: action.data};
          case 'ERROR':
            return {...curHttpState, 
                loading: false, 
                error: action.errorMessage 
            };
            case 'CLEAR':
                return { ...curHttpState, error: null };
          default:
            throw new Error('Should not be reached!');
        }
    };
    
    const questionReducer = (curquestionState, action) => {
        switch (action.type) {
          case 'SET_CURRENT':
            return {...curquestionState, current:action.current};
        case 'SET_SCORE':
            return {...curquestionState, score:action.score};
          default:
            throw new Error('Should not be reached!');
        }
    };

    const [questionState, dispatch] = useReducer(questionReducer,{ 
        score: 0, current: 1 
    });
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        data: [],
        loading: false,
        error: null
    })
    
    useEffect(() => {
        dispatchHttp({ type: 'SEND' });
        fetch('http://localhost:3000/generalKnowledge')
            .then(resp => {
                dispatchHttp({ type: 'RESPONSE' });
                return resp.json()
            })
            .then(data => {
                dispatchHttp({
                    type: 'ADD',
                    data: data
                })
            })
            .catch(err => {
                dispatchHttp({ 
                    type: 'ERROR', 
                    errorMessage: 'Something went wrong!' 
                });
            });
    }, []);

        const clearError = () => {
            dispatchHttp({ type: 'CLEAR' });
        };

        const setCurrent = (current) => {
            dispatch({
                type:'SET_CURRENT', 
                current 
            });
        }

        const setScore = (score) => {
            dispatch({ 
                type:'SET_SCORE',
                score 
            });
        }

        if (questionState.current > httpState.data.length) {
            return (
                <Results score={questionState.score} />
            );
        }
        

        return (
            <div className="container">
                {httpState.error ?
                     <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
                     :
                <div className="container-questions">
                        {
                            httpState.data.map(question => {
                                if (questionState.current === question.id)
                                    return <ListOfQuestions
                                        setScore={setScore} setCurrent={setCurrent}
                                        question={question} key={question.id} 
                                        questionState ={questionState} loading={httpState.loading}/>
                            })
                        }
                </div>
                }
                
            </div>
        );
        
}

export default Main;

