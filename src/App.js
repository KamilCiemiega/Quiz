import React from 'react';
import Home from './components/Home';
import './scss/main.scss'
import QuestionMain from './components/QuestionMain';
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
            <Route path='/pytania' component={QuestionMain} />
          </Switch>
        </>
      </HashRouter>
  );
}

export default App;
