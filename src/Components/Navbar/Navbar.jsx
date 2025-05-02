import React, { useState } from "react";
import img from "../../assets/p.jpg";
import "./Navbar.css";
import { GiFamilyHouse, GiHamburgerMenu, GiWoodCabin } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdBedroomParent, MdOutlinePool, MdOutlineWhatshot } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { LuTentTree } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const [Visible, setVisible] = useState(false)
  return (
    <div id="Navbar">
      <div className="nav1">
        <div className="logo">
          <img src={img} alt="" width="50px" />
          <h1>Property Rental</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Property" />
          <button>
            <span>Search</span> <IoSearch/>
          </button>
        </div>
        <div className="ham">
          <button id="btn1">List Your Home</button>
          <button id="btn2" onClick={()=>{
            setVisible(!Visible)
          }}>
            <GiHamburgerMenu id="svg1" />
            <CgProfile id="svg2" />
          </button>
        </div>

        {Visible?<div className="menu">
          <span>Login</span>
          <span>Sign up</span>
          <span>List Your Home</span>
          <span>Help Center</span>
         
        </div>:null}
      </div>
      <div className="nav2">
        <div className="svg11">
          <MdOutlineWhatshot/>
          <h3>Trending</h3>
        </div>
        <div className="svg11">
          <GiFamilyHouse/>
          <h3>Houses</h3>
        </div>
        <div className="svg11">
          <MdBedroomParent/>
          <h3>Rooms</h3>
        </div>
        <div className="svg11">
          <PiFarm/>
          <h3>Farm Houses</h3>
        </div>
        <div className="svg11">
          <MdOutlinePool/>
          <h3>Pool Houses</h3>
        </div>
        <div className="svg11">
          <LuTentTree/>
          <h3>Tent Houses</h3>
        </div>
        <div className="svg11">
          <GiWoodCabin/>
          <h3>Cabins</h3>
        </div>
        <div className="svg11">
          <SiHomeassistantcommunitystore/>
          <h3>Shops</h3>
        </div>
        <div className="svg11">
          <FaTreeCity/>
          <h3>Forest Houses</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
