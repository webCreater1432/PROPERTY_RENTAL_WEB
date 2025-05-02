import React from "react";
import "./Home.css";
import Card from "../Card/Card";
import { data } from "../../Utils/DummyData";

const Home = () => {
  return (
    <div id="home"> 
      {data.map((items) => (
        <Card 
          image1={items.image1}
          image2={items.image2}
          image3={items.image3}
          price={items.price}
          title={items.name}
          id={items.id}
        />
      ))}
    </div>
  );
};

export default Home;
