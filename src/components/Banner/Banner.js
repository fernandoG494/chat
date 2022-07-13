import React from 'react';

import './Banner.css';

const Banner = ({status}) => {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col serverStatus" >
                        {status ?
                            <span class="badge rounded-pill bg-success">Online</span> :
                            <span class="badge rounded-pill bg-danger">Offline</span>
                        }
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
