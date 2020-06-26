import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This App will detect faces in your pictures. Check it out!'}
            </p>
            <div className='center form'>
                <div className='.pattern-grid-sm form center pa4 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-gold br3 '>Detect</button>
                </div>            
            </div>
        </div>
    )
}

export default ImageLinkForm;