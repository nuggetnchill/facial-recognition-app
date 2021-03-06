import React from 'react'
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl, box }) => {
    const faces = box.map((face,i) => { 
        return <div
        key={i} 
        className='bounding-box' 
        style={{ top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol }}>
        </div>
    })
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='600px' height='auto' />
                {/* <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div> */}
                {faces}
            </div>
        </div>
    );
}

export default FaceRecognition;