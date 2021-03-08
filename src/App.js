import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componants/Home/Home';
import NotFound from './Componants/NotFound/NotFound';
import FriendDetail from './Componants/FriendDetail/FriendDetail';

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Home" component={Home}></Route>
          <Route path="/Friend/:friendId" component={FriendDetail}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
