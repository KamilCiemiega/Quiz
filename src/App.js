import React from 'react';
import Home from './components/Home';
import './scss/main.scss'
import QuestionMain from './components/QuestionMain';
import Results from './components/Results';
import WorldScore from './components/WorldScore';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questions' component={QuestionMain} />
            <Route path='/results' component={Results} />
            <Route path='/worldScore' component={WorldScore} />
          </Switch>
        </>
      </HashRouter>
  );
}

export default App;
