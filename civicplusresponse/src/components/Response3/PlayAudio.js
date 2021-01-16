import React, { useCallback } from 'react';
import { MDBIcon } from "mdbreact";
import useSound from 'use-sound';

import mary from "../../assets/1.mp3"

const PlayAudio = () => {
    
    const [play, { stop }] = useSound(mary);

    const [isHovering, setIsHovering] = React.useState(
        false
      );
    return (
        <button 
        style={{padding:"50px"}}
          onMouseEnter={() => {
            setIsHovering(true);
            play();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }}
        >
            Hover over me to listen to Mary <MDBIcon icon="volume-up" />
          
        </button>
    )
};

export default PlayAudio