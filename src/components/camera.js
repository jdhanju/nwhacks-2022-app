//camera.js is a component that handles everything related to the camera function
import React, { useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function Camera() {

    //hooks
    const [displayImagine, setDisplayImagine] = useState("");
    const [alignment, setAlignment] = useState("");


    const handleToggleButton = (event, newAlignment) =>{
        setAlignment(newAlignment);
    }

    return(
        <div>
            <h5 className="font-semibold">Capture your image</h5>

            <br />

            <input className="hidden" id="img-input" type="file" accept="image/*" capture="environment" onChange={(e) => handleChange(setDisplayImagine, displayImagine, e.target)}/>

            <label htmlFor="img-input" className="place-content-center">
                <CameraAltOutlinedIcon fontSize="large" color="primary"/>
            </label>

            <br />
            <br />

            {   displayImagine !== "" ?
                //display the imagine and buttons
                <div>
                    <img id="image" src={displayImagine} alt="no image selected..."  width="500" height="600"/>

                    <br />
                    <br />

                    <ToggleButtonGroup color="primary" exclusive value={alignment} onChange={handleToggleButton}>
                        <ToggleButton value="text">Text</ToggleButton>
                        <ToggleButton value="code">Code</ToggleButton>
                    </ToggleButtonGroup>
                    
                    <br />
                    <br />

                    <Button variant="text">Submit</Button>
                </div>
                //don't display anything
                : null
            }
        </div>
    );
}

function handleChange(setDisplayImagine, displayImagine, target){
    if(target.files){
        if (target.files.length !== 0) {
            const file = target.files[0];
            setDisplayImagine(URL.createObjectURL(file));
        }
    }

}