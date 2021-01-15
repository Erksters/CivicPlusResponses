import './App.css';
import Response1 from './components/Response1/Response1';
import Slider from 'react-input-slider';
import { useState } from 'react';
import {Row, Col} from 'reactstrap'

function App() {
  const [sliderValue, setSliderValue] = useState(20)

  return (
    <div className="homepage">
    <Row>
      <Col></Col>
      <Col xs={8}>
        <Row>
          <Col style={{textAlign:'right'}}>
             <label className="label-fontsize">Font Size &nbsp;</label>
          </Col>
          <Col>
            <Slider 
              className="Slider"
              axis="x"
              x={sliderValue}
              xstep={1}
              xmin={16}
              xmax={32}
              onChange={({x}) =>{
                setSliderValue(x)
                }}
            />
          </Col>  
        </Row>
        
        {/* <header className="header">Hello</header> */}
        <Response1 sliderFontSize={`${sliderValue.toString()}px`} />
    
      </Col>
      <Col></Col>
    </Row>      
      
    </div>
  );
}

export default App;
