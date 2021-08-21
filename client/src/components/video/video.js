import React from 'react';
import './video.css';


export const Video = () => {
  return (
    <div >
      <video autoPlay loop muted className="sizeVideo">
        <source src="https://rb.gy/2spin5" type="video/mp4" />
      </video>
    </div>
  );
};
