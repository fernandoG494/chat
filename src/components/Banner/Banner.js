import React from 'react';

import './Banner.css';

const Banner = ({socket}) => {
    console.log(socket.connected);
    
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col serverStatus" >
                        {socket.connected ?
                            <span className="serverStatus-online">Online</span> :
                            <span className="serverStatus-offline">Offline</span>}
                    </div>
                    <div className="col Text">
                        Chat App
                    </div>
                    <div className="col User">
                        {/* User name */}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Banner;
