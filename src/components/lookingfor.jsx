import React from "react";
import "./components.css";
const images = [
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/3afc1548-9307-474c-8366-92ce658963e0.jpg",
    tag: "Winter Store",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/715d4181-52e3-42c9-a7fb-9e1c44061dcd.jpg",
    tag: "Fall Festive",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/9395145e-d5ee-4644-8013-be5ceeb8d803.jpg",
    tag: "Autumn Winter",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/1e0f8eaa-96fb-49ff-ad50-1cee47346876.jpg",
    tag: "Coveted Jewlerry",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/01e59419-b9b8-49c8-863f-12f70ddefaf5.jpg",
    tag: "Sneaaker Story",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/53e44e1c-f156-4129-b165-750eccd6af68.jpg",
    tag: "Sling it",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/9676586b-d6dc-43bb-b1c7-63c31d3b36cc.jpg",
    tag: "Cozy Sleep...",
  },
  {
    img:
      "https://images-static.nykaa.com/uploads/tr:w-126,e-sharpen,/ca1bcc3d-3831-4230-b6c6-0545e35cba8c.jpg",
    tag: "Rosegold",
  },
];

const LookingFor = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 className='heading'>What Are You Looking For?</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {images.map((image, index) => (
          <div className="lookcard" key = {index}>
            <img src={image.img} alt="Look" />
            <div>{image.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookingFor;
