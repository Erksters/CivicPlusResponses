import React, { useState } from 'react';
import swal from 'sweetalert';
import {isMobile} from 'react-device-detect';


const MobileWarningAlert = () => {
    const warningMsg = `This page was designed for desktops! It may not render correctly on your screen due to it's size.`
    const [goAway, setGoAway] = useState(true);
    console.log(window.innerWidth)
    if(goAway && isMobile){
        swal("Screen too small?", warningMsg, "info");
        setGoAway(false)
    }

    return(
        <>
        </>
    );
}

export default MobileWarningAlert;