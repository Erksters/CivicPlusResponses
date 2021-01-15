import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import ColoredBox from './ColoredBox';
import "./Response2.css";

const Response2 = props => {
    const {sliderFontSize} = props;
    const [currentColor, setCurrentColor] = useState('whitesmoke')
    var text = `
        The <a> tag, commonly pronounced as “anchor” tag, will create a hyper link on your website.
         This can be used to send users to another page on your site or a completely new site. 
         In this case you will send a user to Google’s front page because the “href” attribute of the anchor tag was set to https://www.google.com/. 
         `
    var text2 = `
         My personal recommendation would be to ensure that the color scheme of your site is not disrupted by the blue/purple hyperlink.
          You can change the color of the hyperlink with additional CSS.
        `;

        const handleColorChange = (event) =>{
            setCurrentColor(event)
        }
    return(
        <div>
            <p style={{fontSize: sliderFontSize}}> {text}</p>
            <p style={{fontSize: sliderFontSize}}> {text2}</p>
            <div>
                <Row>
                    <Col><Button className="Buttons" onClick={()=>{handleColorChange('#007BFF')}} style={{backgroundColor:'#007BFF', fontWeight:500}} color="black" >Try Me!</Button></Col>
                    <Col><Button onClick={()=>{handleColorChange('whitesmoke')}} style={{backgroundColor:'whitesmoke' , fontWeight:500,  borderStyle:'solid', borderColor:'black'}} color="black" >Try Me!</Button></Col>
                    <Col><Button onClick={()=>{handleColorChange('red')}} style={{backgroundColor:'red' , fontWeight:500}} color="black" >Try Me!</Button></Col>
                    <Col><Button onClick={()=>{handleColorChange('green')}} style={{backgroundColor:'green' , fontWeight:500}} color="black" >Try Me!</Button></Col>
                </Row>

                <ColoredBox myColor={currentColor} />
            </div>
        </div>
    );
}

export default Response2;