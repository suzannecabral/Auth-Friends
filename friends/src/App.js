import React from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';
import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <h1>Friends</h1>
        <nav>
          <div class="navLink">
            <Link to="/login">Login</Link>
          </div>
          <div class="navLink">
            <Link to="/friends">My Friends</Link>
          </div>
          <div class="navLink">
            <Link to="/add">Add Friend</Link>
          </div>
        </nav>
        </header>
        
        <div className="contentWrapper">
          {/* <FriendsList />
          <Login />
          <AddFriend /> */}

          <Switch>
            <Route path="/add" component={AddFriend} />
            <Route path="/friends" component={FriendsList} />
            <Route path="/login" component={Login}/>

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
