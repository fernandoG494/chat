import React from 'react';
import Banner from './components/Banner/Banner';
import io from 'socket.io-client';
import Chat from './components/Chat/Chat';

import './App.css';

const SERVER = "http://127.0.0.1:8080";

function App() {
    const [status, setStatus] = React.useState(false);
    
    var socket = io(SERVER);
    
    socket.on('connect', () => {
        setStatus(true);
    });

    socket.on('disconnect', () => {
        setStatus(false);
    });

    return (
        <div className="App">
            <Banner status={status}/>
            <Chat />
        </div>
    );
};

export default App;
