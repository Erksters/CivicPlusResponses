import React from 'react';
import { Col, Row } from 'reactstrap';
import HTTP from './HTTP';
import HTTPS from './HTTPS';
import HTTPtext from './HTTPtext';
import unsecureimg from "../../assets/U1.PNG"
import "./Response1.css";


const Response1 = props => {
    const {sliderFontSize} = props;

    var text = `
    Https has one key difference when compared to its former version, Http.  
    That one key difference is security. In fact, the "s" in "Https" stands for "secure"!
    Essentially, Https is Http but with additional protections from attackers. 

    The reason you see other county sites with Https prefixing their site domain, and not Http, is because they have added additional security to their site.
     `;

    var text2 = `
        This security is useful when sensitive information, such as passwords or credit card information,
      is passed between a web browser and the server. Without this protection the user’s information is vulnerable to attacks.
      If you do not require sensitive information on your site, then you have nothing to worry about, however your users may experience an alarming / cumbersome message every time they visit your site.
       `;

       var text3 = `
       Additionally, since Https was not the standard across the early web, Google has announced that sites with the secure Https would be ranked higher on their
       search engine than sites that do not have Https. 
      `
      
      var text4 = `So, in conclusion, you don’t have anything to lose when adding security to your site!`
    return(
        <div >
            <p style={{fontSize: sliderFontSize}} > {text}</p>
            <Row >
                <Col xs={5}></Col>
                <Col >
                    <Row  style={{fontSize: sliderFontSize, fontWeight:500}}>
                        <HTTP color="red"/>
                        <HTTPS color="green"/>
                        <HTTPtext color="black"/>
                    </Row>
                </Col>                
            </Row>
            <br/>
            
            <p style={{fontSize: sliderFontSize}} > {text2}</p>

            <div style={{textAlign:'center'}}>
                <img     
                    src={unsecureimg}
                    alt="Unavailable Image"
                />
            </div>
            
            <p style={{fontSize: sliderFontSize}} > {text3}</p>

            <div style={{textAlign:'center'}}>
                <a style={{fontSize: sliderFontSize}} 
                href="https://developers.google.com/search/blog/2014/08/https-as-ranking-signal">
                    Source: Google Search Central 
                </a>    
            </div>
            
            <br />
            <br />
            <p style={{fontSize: sliderFontSize}} > {text4}</p>
        </div>
    );
}

export default Response1;