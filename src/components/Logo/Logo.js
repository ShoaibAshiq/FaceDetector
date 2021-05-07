import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import Brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3 ">
          {" "}
          <img style={{ paddingTop: "5px" }} alt="Brain logo" src={Brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;