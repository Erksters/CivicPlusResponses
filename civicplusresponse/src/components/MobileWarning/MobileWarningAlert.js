import { MDBIcon } from 'mdbreact';
import React, { useState } from 'react';
import swal from 'sweetalert';


const MobileWarningAlert = () => {
    const warningMsg = `This page was designed for desktops! It may not render correctly on your screen due to it's size.`
    const [goAway, setGoAway] = useState(true);
    console.log(window.innerWidth)
    if(window.innerWidth < 500 && goAway){
        swal("Screen too small?", warningMsg, "info");
        setGoAway(false)
    }

    return(
        <>
        </>
    );
}

export default MobileWarningAlert;