import React, { useState } from "react";
import "../../styles/index.css"

const Home = () => {
	const [selectColor, setSelectColor] = useState("");

  return (
    <div className="traffic-light">
      <div
        onClick={() => setSelectColor("red")}
        className={"light red" + (selectColor === "red" ? " red-glow" : "")}
      ></div>
      <div
        onClick={() => setSelectColor("yellow")}
        className={
          "light yellow" + (selectColor === "yellow" ? " yellow-glow" : "")
        }
      ></div>
      <div
        onClick={() => setSelectColor("green")}
        className={
          "light green" + (selectColor === "green" ? " green-glow" : "")
        }
      ></div>
    </div>
  );
};

export default Home;
