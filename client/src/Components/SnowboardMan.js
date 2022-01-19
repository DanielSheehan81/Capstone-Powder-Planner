import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function SnowboardMan() {
  return (
    <div>
       <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_vykpwt8b.json"
        style={{ height: '300px', width: '300px' }}
        speed = {.7}
      >
      </Player>
    </div>
  )
}