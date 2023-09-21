import React from "react";
import image1 from "./assets/Images/image-1.jpg";
import image2 from "./assets/Images/image-2.jpg";
import image3 from "./assets/Images/image-3.jpg";
import image4 from "./assets/Images/image-4.jpg";
import image5 from "./assets/Images/image-5.jpg";
import { useState } from "react";

const gallery = [image1, image2, image3, image4, image5];
const App = () => {
  const [active, setActive] = useState(-1);
const [transition,setTransition] =useState(0.5)

  const scrollToImage = (i) => {
    setActive(-1);
    const imageElement = document.getElementById(`image_${i}`);
    if (imageElement) {
      setTimeout(() => {
        imageElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', });
      }, 500)
    }
    setTimeout(() => {
    setActive(i)
    }, 1000)
  };

  const handleMinusClick = () => {
      setTransition((pre) => pre-0.1)
  }
  const handlePlusClick = () => {
      setTransition((pre) => pre+0.1)
  }

  return (
    <div className="container">
      <div className="slider">
      <div style={{ flex: '0 0 50%' }}></div>
        {gallery.map((image, i) => (
          <div key={i} onClick={() => scrollToImage(i)} >
            <img
             id={`image_${i}`}
             style={{transition: `${transition}s`}}
              className={i === active ? "images active" : "images"}
              src={image}
              alt=""
            />
          </div>
        ))}
         <div style={{ flex: '0 0 50%' }}></div>
      </div>
      <div className="dot-wrapper">
      {gallery.map((x,i) => (
        <div onClick={() => scrollToImage(i)} className={active === i ? 'dot active-dot' : 'dot'} />
      ))}
      </div>

        <div className="adjust-box">
          <h3>Adjust Transition Speed</h3>
          <div className="adjust-wrapper">
            <button onClick={() => handleMinusClick()} >-</button>
            {transition}s
            <button onClick={() => handlePlusClick()}>+</button>
          </div>
        </div>
    </div>
  );
};

export default App;
