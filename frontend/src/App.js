import React from 'react';
import Home from './views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Learn from './views/Learn';

function App() {
  return (
    <div className="App cover">
      <Router>
        <Switch>
          <Route path="/:id" children={<Learn/>}/>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
