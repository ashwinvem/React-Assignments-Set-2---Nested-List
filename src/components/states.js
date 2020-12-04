import React from "react";

import Cities from "./cities";

export default function States(props) {
  const [toggleCityDisplay, setToggleCityDisplay] = React.useState(false);
  const handleState = () => {
    setToggleCityDisplay(!toggleCityDisplay);
  };
  return (
    <>
      <div onClick={handleState}>{props.state.name}</div>
      {toggleCityDisplay &&
        props.state.cities.map((city, index) => (
          <Cities id={`city${index + 1}`} city={city} />
        ))}
    </>
  );
}
