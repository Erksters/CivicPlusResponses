import React, { useCallback } from 'react';
import { MDBIcon } from "mdbreact";
import { SayButton } from 'react-say';

import "./Response3.css";

const Response3 = props => {
    const {sliderFontSize} = props;
    var text = `
    Good morning Mary. Thank you for calling CivicPlus as we’re always happy to help our Clients. 
    I sincerely apologize for what happened in your prior phone call with us,
     but I will not let that define our conversation today. 
         `

    var text2 = `I assure you that the applications you are looking for still exist. They were moved to a different location.
     On my end, I see that you currently have 10 applications in you Archived Bin.
      What we’re going to do today is get your applications out of the Archived Bin 
      and take note on how to prevent this issue from happening again.
        `;

    var text3 = `
    If you’d like to see me move your applications out of the Archived Bin and return them to their original place,
     then we can set up a zoom call so you can see my screen and follow along on your computer. 
     Otherwise I can tell you which buttons to press over this phone call. 
    `
    var text4 = `
    If the client is absolutely uncooperative and does not want to troubleshoot with me… 
    `

    var text5 = `
        I’ll check our FAQ’s page to see if there is any information on this topic. I’ll send you the link so that you may complete this process on your own. 
    `

    var text6 = `
        Do we have any video tutorials on this? Such as a Youtube channel dedicated to customer support?
    `

    const selector = useCallback(voices => [...voices].find(v => v.lang === 'en-GB'), []);

    return(
        <div>
            <SayButton
                classname="Coolness"
                rate={1}
                voice={selector}
                speak={text6}
            >
                Listen to Mary's technical problems <MDBIcon icon="volume-up" />
            </SayButton>
            <p style={{fontSize: sliderFontSize}}> {text}</p>
            <p style={{fontSize: sliderFontSize}}> {text2}</p>
            <p style={{fontSize: sliderFontSize}}> {text3}</p>
            <p style={{fontSize: sliderFontSize, fontStyle:"italic", textAlign:'center'}}> {text4}</p>
            <p style={{fontSize: sliderFontSize}}> {text5}</p>
            <p style={{fontSize: sliderFontSize, fontStyle:"italic", textAlign:'center'}}> {text6}</p>
        </div>
    );
}

export default Response3;