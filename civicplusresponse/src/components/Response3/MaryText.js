import React, { useState } from 'react';
import { Collapse } from "reactstrap";



const MaryText = props => {
    const {sliderFontSize} = props;

    const [collOpen, setCollOpen] = useState(false);
    
    var MarysComplaint = `Hi it's Mary.
    I am having a lot of problems trying to figure out your software and I think I just deleted all of my job applications. 
   I'm worried that I'll never get them back. This wouldn't be the first time your software
    gets me this upset and last time I called I had an awful experience.
   How was I supposed to know that the archive button makes the applications dissappear?
   Where did they go? I usually asked my nephew Erick for help on these situations but he's 
   currently out of town. I want you guys to make better software and hire better programmers, 
   so us older folk can still get a grip on these types of things.
   `


   return(
       <>
            <button 
                style={{padding:"50px", marginLeft:"16px"}}
                onClick={()=> setCollOpen(!collOpen)}>
                View Mary's Transcript
            </button>
            <Collapse isOpen={collOpen} style={{ fontSize:sliderFontSize}} >{MarysComplaint}</Collapse>
       </>
    
   )
}

export default MaryText;