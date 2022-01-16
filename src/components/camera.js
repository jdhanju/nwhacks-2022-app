/* eslint-disable @next/next/no-img-element */
//camera.js is a component that handles everything related to the camera function
import { PlusIcon, EyeIcon } from '@heroicons/react/solid'
import React, { useState, useEffect, Fragment } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import postImage from '../requests/requests';
import TextField from '@mui/material/TextField';

import { Menu, Switch  } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function Camera() {

    //hooks
    const [enabled, setEnabled] = useState(false);
    const [displayImagine, setDisplayImagine] = useState("");
    const [toggle, setToggle] = useState("");
    const [loader, setLoader] = useState(false);
    const [id, setID] = useState('');



    const handleToggleButton = (event, newAlignment) =>{
        setToggle(newAlignment);
    }

    const switchLoader = () => {
        setLoader(!loader);
    }

    const handleIdInput = (e) => {
        const input = e.target.value;
        setID(input)
    }

    return(
        // <div>
        //     <h5 className="font-semibold">Capture your image</h5>

        //     <br />

        //     <input className="hidden" id="img-input" type="file" accept="image/*" capture="environment" onChange={(e) => handleChange(setDisplayImagine, displayImagine, e.target)}/>

        //     <label htmlFor="img-input" className="place-content-center">
        //         <CameraAltOutlinedIcon fontSize="large" color="primary"/>
        //     </label>

        //     <br />
        //     <br />

        //     {   displayImagine !== "" ?
        //         //display the imagine and buttons
        //         <div>
        //             <div className="h-250 w-350">
        //                 <img id="image" src={displayImagine} alt="no image selected..."  width="250" height="350"/>
        //             </div>

        //             <br />
        //             <br />

        //             <ToggleButtonGroup color="primary" exclusive value={toggle} onChange={handleToggleButton}>
        //                 <ToggleButton value="text">Text</ToggleButton>
        //                 <ToggleButton value="code">Code</ToggleButton>
        //             </ToggleButtonGroup>
                    
        //             <br />
        //             <br />
                    
        //                 <TextField id="userID" color="primary" label="ID" variant="standard" onChange={(e) => handleIdInput(e.target)}/>

        //             <br />
        //             <br />
                    
        //             { toggle !== "" &&  loader === false ?
        //                 //if the text/code toggle isn't clicked then disable the submit button
        //                 <Button variant="text" onClick={() => {
        //                     switchLoader();
        //                     setID(input);
        //                     postImage(displayImagine, setloader, id);
        //                 }
        //             }>Submit</Button>

        //                 : <Button disabled variant="text">Submit</Button>
        //             } 
        //         </div>
        //         //don't display anything
        //         : null
        //     }
            
        //     <br />

        //     { loader ? 
        //         <div className="flex items-center justify-center ">
        //         <div className="w-8 h-8 border-b-2 border-blue-400 rounded-full animate-spin"></div>
        //       </div>
        //     : null}

        // </div>

        <div className="flex items-center justify-center h-screen px-6">
            <div className="w-full text-center"> 
                <p className="my-8 text-lg text-gray-500">Take a picture, upload a picture of code or text, and submit your image.</p>      
                <div className="flex items-center justify-center w-full max-w-2xl">
                    {displayImagine !== ""?
                    <div className="h-250 w-350">
                        <img id="image" src={displayImagine} alt="no image selected..."  width="250" height="350"/>
                    </div>
                    :
                    <svg className="w-64 h-64"  viewBox="0 0 300 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_55_116)">
                                <path d="M292.32 119.493L137.027 125.947L144.674 309.948L299.968 303.493L292.32 119.493Z" fill="#E0E0E0"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M149.028 137.328L278.379 131.951L285.712 291.5L156.35 296.878L149.028 137.328Z" fill="#B0CDD1"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M152.45 272.29C152.45 272.29 179.06 215.803 187.871 216.381C198.659 217.07 216.759 260.879 216.759 260.879C216.759 260.879 228.647 232.736 238.38 233.002C250.724 233.314 297.378 294.111 297.378 294.111L151.339 298.067L152.45 272.29Z" fill="#6CA389"/>
                                <path d="M264.842 190.159C268.671 181.078 264.413 170.613 255.332 166.785C246.251 162.956 235.786 167.214 231.958 176.295C228.129 185.376 232.387 195.841 241.468 199.669C250.549 203.498 261.014 199.24 264.842 190.159Z" fill="#6CA389"/>
                                <path d="M70.7635 80.1554L-0.00830078 250.174L143.484 309.904L214.256 139.886L70.7635 80.1554Z" fill="#D9D9D9"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M76.8194 95.5742L196.348 145.328L135.595 293.045L16.066 243.291L76.8194 95.5742Z" fill="#B0CDD1"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.9214 219.403C22.9214 219.403 70.8752 179.404 78.6527 183.638C88.1301 188.815 85.9968 236.158 85.9968 236.158C85.9968 236.158 108.696 215.692 117.407 220.036C128.451 225.536 145.061 300.367 145.061 300.367L11.0219 242.235L22.9214 219.403Z" fill="#6CA389"/>
                                <path d="M149.952 196.863C159.714 195.515 166.536 186.509 165.188 176.746C163.84 166.984 154.834 160.163 145.072 161.51C135.309 162.858 128.488 171.864 129.836 181.627C131.183 191.389 140.19 198.21 149.952 196.863Z" fill="#6CA389"/>
                                <path d="M232.88 54.598C231.771 51.0576 229.96 47.7765 227.557 44.9497C225.154 42.123 222.207 39.8082 218.892 38.143C218.892 37.1097 218.892 36.0653 218.825 35.0098C217.636 15.8994 202.881 1.48883 185.871 2.78878C176.16 3.55542 167.805 9.28853 162.65 17.6327C158.516 6.52197 148.472 -0.844419 137.228 0.0444374C123.107 1.15551 112.451 14.8994 113.44 30.7655C113.44 31.0655 113.44 31.3655 113.507 31.6655C110.611 28.9347 106.788 27.4023 102.807 27.3768C93.4743 27.3768 85.908 35.8764 85.908 46.3538C85.9046 48.8522 86.3448 51.3313 87.2079 53.6758C65.5865 48.8093 48.4871 67.0086 51.5314 82.6747H269.001C269.001 82.6747 266.035 50.8981 232.88 54.5646" fill="#B0CDD1"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M140.806 59.6756L123.429 59.0645L150.939 26.1768L178.804 60.62L162.138 60.1755V93.8521H140.806V59.6756Z" fill="#6CA389"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_55_116">
                                <rect width="300" height="309.922" fill="white"/>
                                </clipPath>
                                </defs>
                    </svg>
}
                </div>    
                <div className="flex flex-col items-center mt-6">
                
                <div>
                <label htmlFor="email" className="block w-full pr-10 text-[#8BAA9F] placeholder-[#8BAA9F] border-[#8BAA9F] rounded-md focus:outline-none focus:ring-[#8BAA9F] focus:border-[#8BAA9F] sm:text-sm">
                    Session ID
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                    type="text"
                    name="userID"
                    id="userID"
                    className="block w-full pr-10 text-[#8BAA9F] placeholder-[##8BAA9F] border-[#8BAA9F] rounded-md focus:outline-none sm:text-sm"
                    aria-invalid="true"
                    onChange={handleIdInput}
                    />
                    
                </div>
      
    </div>
                </div>
                    <div className="inline-flex items-center ">
                        <div className="mx-2 text-gray-500">Text</div>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className="relative inline-flex mx-1 items-center justify-center flex-shrink-0 w-10 h-5 my-4 rounded-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8BAA9F]"
                            >
                            <span className="sr-only">Use setting</span>
                            <span aria-hidden="true" className="absolute w-full h-full bg-white rounded-md pointer-events-none" />
                            <span
                                aria-hidden="true"
                                className={classNames(
                                enabled? 'bg-[#8BAA9F]' : 'bg-gray-200',
                                'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                                )}
                            />
                            <span
                                aria-hidden="true"
                                className={classNames(
                                enabled? 'translate-x-5' : 'translate-x-0',
                                'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                                )}
                            />
                        </Switch>
                        <div className="mx-2 text-gray-500">Code</div>
                    </div>
                    <div>

                    <input className="hidden" id="img-input" type="file" accept="image/*" capture="environment" onChange={(e) => handleChange(setDisplayImagine, displayImagine, e.target)}/>

                    <label htmlFor="img-input" className="mb-2 cursor-pointer place-content-center">
                        <CameraAltOutlinedIcon fontSize="large" color="primary"/>
                    </label>
                    
                    <button
                        type="button"
                        className="inline-flex -mb-2 mx-4 max-w-2xl items-center px-4 py-2 text-sm font-medium text-white bg-[#8BAA9F] border border-transparent rounded-md shadow-sm hover:bg-[#5e746c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8BAA9F] transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
                        onClick={() => {
                            switchLoader();
                            postImage(displayImagine, setLoader, id, enabled)
                        }}
                        >
                        <EyeIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
                            Submit
                    </button>
                    
                </div>   
                { loader ? 
                    <div className="flex items-center justify-center mt-2">
                        <div className="w-8 h-8 border-b-2 border-red-400 rounded-full animate-spin"></div>
                    </div>
                : null}
            </div>
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