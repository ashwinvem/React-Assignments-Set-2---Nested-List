import React from "react";
import Towns from "./townsComponent";

export default function Cities({ inputState, setInputState }) {
  const handelCity = (index) => {
    const inputStateCopy = { ...inputState };
    inputStateCopy.towns = inputStateCopy.cities[index].towns;
    inputStateCopy.isCityClicked = true;

    setInputState(inputStateCopy);
  };

  return (
    <>
      {inputState.cities.map((city, index) => (
        <div
          key={city.name}
          id={`city${index + 1}`}
          onClick={() => handelCity(index)}
        >
          {city.name}
        </div>
      ))}
      <br />
      {inputState.isCityClicked && <Towns inputState={inputState} />}
    </>
  );
}
