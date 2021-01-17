import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';

const HTTPtext = props => {
    const {color} = props;
    return(
        <div style={{color: color }}>
            <Col>
                <Row>
                    yper
                </Row>
                
                <Row>
                    ext
                </Row>
                <Row>
                    ransfer
                </Row>
                <Row>
                    rotocol
                </Row>
                <Row>
                    ecure
                </Row>
            </Col>
        </div>
        
    );
}

export default HTTPtext;