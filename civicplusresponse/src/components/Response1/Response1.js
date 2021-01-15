import React from 'react';
import "./Response1.css";


const Response1 = props => {
    const {sliderFontSize} = props;
    
    

    var text = `
    When it comes to security, Http and Https are different. The reason you see other counties with Https prefixing their site domain, and not Http, is because they have added additional security to their site. For example, if sensitive information, such as passwords or credit card information, is passed between a web browser and the server, then the user’s information is vulnerable to attacks without this protection. The counties with Https may be handling sensitive information. If you do not require sensitive information on your site, then you have nothing to worry about, however your users may experience an alarming / cumbersome message every time they visit your site.#
Additionally, since Https was not the standard across the early web, Google has announced that sites with the secure Https would be ranked higher on their search engine than sites that do not have Https. 
So, in conclusion, you don’t have anything to lose when adding security to your site!`;
    return(
        <div>
            <p style={{fontSize: sliderFontSize}} > {text}</p>
        </div>
    );
}

export default Response1;