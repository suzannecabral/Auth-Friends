import React from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';
import Login from './Components/Login';
import AddFriend from './Components/AddFriend';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Friends</h1>
      <nav>
        <div class="navLink"><a href="">Home</a></div>
        <div class="navLink"><a href="">About</a></div>
        <div class="navLink"><a href="">Contact</a></div>
      </nav>
      </header>
      
      <div className="contentWrapper">
        <FriendsList />
        <Login />
        <AddFriend />
      </div>

    </div>
  );
}

export default App;
