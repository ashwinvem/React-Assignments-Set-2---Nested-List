import React from "react";

export default function Towns({ inputState }) {
  return (
    <>
      {inputState.towns.map((town, index) => (
        <div key={town.name} id={`town${index + 1}`}>
          {town.name}
        </div>
      ))}
    </>
  );
}
