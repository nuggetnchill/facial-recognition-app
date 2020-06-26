import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 '>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3 "> <img src={face}></img> </div>
            </Tilt>
        </div>    
    )
}

export default Logo;