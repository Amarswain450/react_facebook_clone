import React, { useState } from 'react'
import './App.css';
import ChatBar from './components/ChatBar';
import ChatBox from './components/ChatBox';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  const [state, setState] = useState(false);
  const [current, setCurrent] = useState({});
  const openChat = (users) => {
    setState(true);
    setCurrent(users);
  }
  const closeChat = () => {
    setState(false);
  }
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <Sidebar />
        <Post />
        <ChatBar openChat={openChat} />
        <ChatBox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>
  );
}

export default App;
