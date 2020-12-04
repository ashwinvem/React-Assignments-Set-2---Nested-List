import React, {useState} from "react";

import Towns from "./towns";

import "../styles/App.css";

export default function Cities(props) {
  const [toggleTownDisplay, setToggleTownDisplay] = useState(false);
  const handleCity = () => {
    setToggleTownDisplay(!toggleTownDisplay);
  };
  return (
    <>
      <div className="citySpace" onClick={handleCity}>
        {props.city.name}
      </div>
      {toggleTownDisplay &&
        props.city.towns.map((town, index) => (
          <Towns id={`town${index + 1}`} town={town} />
        ))}
    </>
  );
}
