import React from 'react';
import Home from './views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Learn from './views/Learn';
import GLearn from './views/GraphQLLearn';

function App() {
  return (
    <div className="App cover">
      <Router>
        <Switch>
          <Route path="/:id" children={<GLearn/>}/>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
