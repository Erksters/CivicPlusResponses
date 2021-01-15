import React from 'react';
import "./Response1.css";


const Response1 = props => {
    const {sliderFontSize} = props;

    var text = `
    When it comes to security, Http and Https are different. Essentially, Https is Http but with additional security. 
    The reason you see other counties with Https prefixing their site domain, and not Http, is because they have added additional security to their site.
     `;

        
    var text2 = `
     For example, if sensitive information, such as passwords or credit card information,
      is passed between a web browser and the server, then the user’s information is vulnerable to attacks without this protection. 
      The counties with Https may be handling sensitive information. If you do not require sensitive information on your site,
       then you have nothing to worry about, however your users may experience an alarming / cumbersome message every time they visit your site.#

       `;

       var text3 = `
       Additionally, since Https was not the standard across the early web, Google has announced that sites with the secure Https would be ranked higher on their
       search engine than sites that do not have Https. 
      `
      
      var text4 = `So, in conclusion, you don’t have anything to lose when adding security to your site!`
    return(
        <div>
            <p style={{fontSize: sliderFontSize}} > {text}</p>
            <p style={{fontSize: sliderFontSize}} > {text2}</p>
            <p style={{fontSize: sliderFontSize}} > {text3}</p>
            <p style={{fontSize: sliderFontSize}} > {text4}</p>
        </div>
    );
}

export default Response1;