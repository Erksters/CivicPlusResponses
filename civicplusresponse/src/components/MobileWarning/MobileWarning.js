import { MDBIcon } from 'mdbreact';
import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import "./MobileWarning.css";

const MobileWarning = () => {
    const warningMsg = `This page was designed for desktops! It may not render correctly on your screen due to it's size.`
    const [goAway, setGoAway] = useState(true);

    return(
        <>
            {goAway ? 
                <div className="warningMSG">
                    <Row>
                        <Col xs={10}
                            className="text">
                            {warningMsg}
                        </Col>
                        <Col className="warningMSG">
                        <button 
                            onClick={() => setGoAway(false)}
                            className="exit">
                                <MDBIcon far icon="times-circle" />
                        </button>    
                        </Col>
                    </Row>
                </div>
                : 
                <> 
                </>    
            }
        </>
    );
}

export default MobileWarning;