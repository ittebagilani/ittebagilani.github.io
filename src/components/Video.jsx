import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://youtu.be/Ygnou642f2Q';

function Video() {
   const playerRef = useRef(null);
   return (
      <div>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
   )
};
export default Video;