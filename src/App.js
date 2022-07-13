import React from 'react';
import socketClient from "socket.io-client";
import Banner from './components/Banner/Banner';
import Chat from './components/Chat/Chat';

import './App.css';

const SERVER = "http://127.0.0.1:8080";

function App() {
    var socket = socketClient(SERVER);

    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
    });
    
    return (
        <div className="App">
            <Banner socket={socket}/>
            <Chat />
        </div>
    );
};

export default App;
