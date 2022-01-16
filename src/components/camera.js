//camera.js is a component that handles everything related to the camera function
import React, { useState, useEffect, useRef } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import postImage from '../requests/requests';
import TextField from '@mui/material/TextField';


export default function Camera() {

    //hooks
    const [input, setInput] = useState("");
    const [displayImagine, setDisplayImagine] = useState("");
    const [toggle, setToggle] = useState("");
    const [loader, setloader] = useState(false);
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        function checkUserID() {
            const item = localStorage.getItem("userID");

            if (item) {
                setUserID(item);
            }
            }

            checkUserID();

            window.addEventListener("storage", checkUserID);

            return () => {
            window.removeEventListener("storage", checkUserID);
        };
    }, []);

    const handleSetUserID = () => {
        setUserID(input);
        localStorage.setItem("userID", input);
    };


    const handleToggleButton = (event, newAlignment) =>{
        setToggle(newAlignment);
    }

    const switchLoader = () => {
        setloader(!loader);
    }

    const handleIdInput = (e) => {
        setInput(e.target.value);
    }

    return(
        <div>
            <span>{userID || ""}</span>

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
                    <div className="h-250 w-350">
                        <img id="image" src={displayImagine} alt="no image selected..."  width="250" height="350"/>
                    </div>

                    <br />
                    <br />

                    <ToggleButtonGroup color="primary" exclusive value={toggle} onChange={handleToggleButton}>
                        <ToggleButton value="text">Text</ToggleButton>
                        <ToggleButton value="code">Code</ToggleButton>
                    </ToggleButtonGroup>
                    
                    <br />
                    <br />
                    
                        <TextField onChange={handleIdInput}  id="userID" color="primary" label="ID" variant="standard"/>

                    <br />
                    <br />
                    
                    { toggle !== "" &&  loader === false ?
                        //if the text/code toggle isn't clicked then disable the submit button
                        <Button variant="text" onClick={() => {
                            switchLoader();
                            handleSetUserID();
                            postImage(displayImagine, setloader);
                        }
                    }>Submit</Button>

                        : <Button disabled variant="text">Submit</Button>
                    } 
                </div>
                //don't display anything
                : null
            }
            
            <br />

            { loader ? 
                <div className="flex items-center justify-center ">
                <div className="w-8 h-8 border-b-2 border-blue-400 rounded-full animate-spin"></div>
              </div>
            : null}

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