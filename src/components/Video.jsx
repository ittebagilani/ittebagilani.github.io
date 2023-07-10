const Video = () => {
    return (
      <video controls width="80%" className="m-auto pb-20">
        <source src="/src/assets/vids/lvl1.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    );
  };
  
  export default Video;