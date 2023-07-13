import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://youtu.be/2w3HbJ40vKQ';

function BeyondVideo() {
   const playerRef = useRef(null);
   return (
      <div className='m-auto'>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} className="m-auto pb-10" width={1000} height={700} />
      </div>
   )
};
export default BeyondVideo;