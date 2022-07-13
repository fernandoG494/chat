import React from 'react';
import Banner from './components/Banner/Banner';
import io from 'socket.io-client';
import Chat from './components/Chat/Chat';

import './App.css';

const SERVER = "http://127.0.0.1:8080";

function App() {
    const [status, setStatus] = React.useState(false);
    
    var socket = io(SERVER);
    console.log('1: ', socket.connected);
    socket.on('connect', () => {
        console.log('2: ', socket.connected);
        setStatus(true);
    });

    return (
        <div className="App">
            <Banner status={status}/>
            <Chat />
        </div>
    );
};

export default App;
