import React, { useEffect, useReducer } from 'react';
import Banner from './components/Banner/Banner';
import io from 'socket.io-client';
import Chat from './components/Chat/Chat';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/authContext';

import './App.css';

const SERVER = "http://127.0.0.1:8080";

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {};
}

function App() {
    var socket = io(SERVER);

    const [user, dispatch] = useReducer(authReducer, {}, init);
    const [status, setStatus] = React.useState(false);
    
    useEffect(() => {
        if(!user) return;
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);
    
    socket.on('connect', () => {
        setStatus(true);
    });

    socket.on('disconnect', () => {
        setStatus(false);
    });

    return (
        <AuthContext.Provider
            value={{
                user,
                dispatch
            }}
        >
            <div className="App">
                <Banner status={status}/>
                <Chat />
            </div>
        </AuthContext.Provider>
    );
};

export default App;
