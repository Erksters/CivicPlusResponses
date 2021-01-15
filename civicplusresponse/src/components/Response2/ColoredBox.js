import React from 'react';
import {Col, Row } from 'reactstrap';

const ColoredBox = props => {
    const {myColor} = props;

    return(
        <div style = {{backgroundColor:`${myColor}`, marginTop:'12px', borderRadius:'10px'}}>
                <Row>
                    <Col className="anchor">
                        <a className="anchors"
                        
                         href="https://www.google.com/">Visit Google.com</a>
                    </Col>
                    <Col>
                        <a className="anchors" 
                        style={{color:'whitesmoke'}}
                        href="https://www.google.com/">Visit Google.com</a>
                    </Col>
                    <Col>
                        <a className="anchors"
                            style={{color:'red'}}
                            href="https://www.google.com/">Visit Google.com</a>
                    </Col>
                    <Col>
                        <a className="anchors"
                            style={{color:'green'}}
                            href="https://www.google.com/">Visit Google.com</a>
                    </Col>
                </Row>
            
        </div>
    );
}

export default ColoredBox;