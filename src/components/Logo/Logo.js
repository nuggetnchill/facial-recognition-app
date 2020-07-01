import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 logo'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3 "> <img alt='logo' src={face}></img> </div>
            </Tilt>
        </div>    
    )
}

export default Logo;