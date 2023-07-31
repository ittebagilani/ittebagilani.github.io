import React, { useState } from "react";
import "./gallery.css"
import CloseIcon from "@material-ui/icons/Close"

import { building, bus, longwayahead, moon, road, sailboat } from "../assets";
const Gallery = () => {

  let data = [
    {
      id: 1,
      imgSrc: building,
    },
    {
      id: 2,
      imgSrc: bus,
    },
    {
      id: 3,
      imgSrc: longwayahead,
    },
    {
      id: 4,
      imgSrc: moon,
    },
    {
      id: 5,
      imgSrc: road,
    },
    {
      id: 6,
      imgSrc: sailboat,
    },

  ]

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <>
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc}/>
            <CloseIcon onClick={() => setModel(false)}/>
        </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        })}
      </div>
    </>
  )
};

export default Gallery;
