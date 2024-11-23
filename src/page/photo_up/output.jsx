import React, { useState } from 'react';
import './output.css'

function Output() {
    const [image, setImage] = useState('');

    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0]); // Fixing the typo
    }

    return (
        <div>
            <div className='body'>
                <div className='topic'>
                Image Upload for Disease Detection:
                </div>
                <div className='text_up'>
                This project will develop a web application that detects plant diseases from uploaded images and provides relevant 
information and treatment suggestions. Additionally, it will offer crop recommendations based on user-provided city 
information, considering local climate and soil data.  
                </div>
            <div className="upload_page">
                <input type="file" name="file" onChange={handleImage} />
                <button>Submit</button>
            </div>
            {image && (
                <div>
                    <p>Selected file: {image.name}</p>
                </div>
            )}
            </div>
          
        </div>
    );
}

export default Output;
