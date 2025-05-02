import React from "react";
import "./Card.css";
const Card = ({image1,image2,image3,title,price,id}) => {
  return (
    <div className="card" key={id}>
      <div className="images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <span className="cardspan1">{title}</span>
      <span className="cardspan1">{price}/Month</span>
    </div>
  );
};

export default Card;
