import React, { Component, useState } from "react";
import "./../styles/App.css";
import States from "./states";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {


  const [index, setIndex] = React.useState({
    indexForCity: 0,
    indexForTown: 0
  });

  const handelClick = (elementIndex, value) => {
    let indexCopy = { ...index };
    if (value === "cities") {
      indexCopy.indexForCity = elementIndex;
      //indexCopy.indexForTown = 0;
    } else if(value === "towns"){
      indexCopy.indexForTown = elementIndex;
    }

    setIndex(indexCopy);
  };


  return (
    <div id="main">
      <label for="states">
        <b>States</b>
      </label>
      <div>
        {states.map((state, i) => (
          <div
            id={`state${i + 1}`}
            key={state.name}
            onClick={() => handelClick(i, "cities")}
          >
            {state.name}
          </div>
        ))}
      </div>

      <label for="cities">
        <b>Cities</b>
      </label>
      <div>
        {states[index.indexForCity].cities.map((city, i) => (
          <div
            id={`city${i + 1}`}
            key={city.name}
            onClick={() => handelClick(i, "towns")}
          >
            {city.name}
          </div>
        ))}
      </div>

      <label for="towns">
        <b>Towns</b>
      </label>
      <div>
        {states[index.indexForCity].cities[index.indexForTown].towns.map(
          (town, i) => (
            <div id={`town${i + 1}`} key={town.name}>
              {town.name}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
