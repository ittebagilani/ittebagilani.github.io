import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://youtu.be/Ygnou642f2Q';

function Video() {
   const playerRef = useRef(null);
   return (
      <div className='m-auto'>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className="m-auto pb-10" width={1000} height={700} />
      </div>
   )
};
export default Video;