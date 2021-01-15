import './App.css';
import Response1 from './components/Response1/Response1';
import Response2 from './components/Response2/Response2';
import Slider from 'react-input-slider';
import { useState } from 'react';
import {Row, Col} from 'reactstrap'
import FadeInSection from './components/FadeInObject/FadeInObject';

function App() {
  const [sliderValue, setSliderValue] = useState(26)
  const [SubHeaderValue, setSubHeaderValue] = useState(32)

  return (
    <div className="homepage">
    <Row>
      <Col></Col>
      <Col xs={7}>
        <Row>
          <Col style={{textAlign:'right'}}>
             <label className="label-fontsize">Adjust Font Size &nbsp;</label>
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
                setSliderValue(x);
                setSubHeaderValue(x + 6)
                }}
            />
          </Col>  
        </Row>
        
        <FadeInSection >
          <h3 style={{fontSize: `${SubHeaderValue.toString()}px`}}>Response 1</h3>
          <Response1 sliderFontSize={`${sliderValue.toString()}px`} />
        </FadeInSection>

        <FadeInSection >
          <h3 style={{fontSize: `${SubHeaderValue.toString()}px`}}>Response 2</h3>
          <Response2 sliderFontSize={`${sliderValue.toString()}px`} />
        </FadeInSection>
        
        
      </Col>
      <Col></Col>
    </Row>      
      
    </div>
  );
}

export default App;
