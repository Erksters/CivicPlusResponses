import React from 'react';
import { Col, Row } from 'reactstrap';

const HTTP = props => {
    const {color} = props;
    return(
        <div style={{color: color }} >
            <Col>
                <Row>
                    H
                </Row>
                
                <Row>
                    T
                </Row>
                <Row>
                    T
                </Row>
                <Row>
                    P
                </Row>
            </Col>
        </div>
        
    );
}

export default HTTP;