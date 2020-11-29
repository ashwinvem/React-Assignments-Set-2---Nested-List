import React from "react";
import Cities from "./citiesComponent";

export default function States({ inputState, setInputState }) {
  const handelStateClick = (index) => {
    let inputStateCopy = { ...inputState };
    inputStateCopy.cities = inputStateCopy.states[index].cities;
    inputStateCopy.towns = inputStateCopy.cities[0].towns;
    inputStateCopy.isStateClicked = true;
    inputStateCopy.isCityClicked = false;

    setInputState(inputStateCopy);
  };

  return (
    <>
      {inputState.states.map((state, index) => (
        <div
          key={state.name}
          id={`state${index + 1}`}
          onClick={() => handelStateClick(index)}
        >
          {state.name}
        </div>
      ))}
      <br />
      {inputState.isStateClicked && (
        <Cities inputState={inputState} setInputState={setInputState} />
      )}
    </>
  );
}
