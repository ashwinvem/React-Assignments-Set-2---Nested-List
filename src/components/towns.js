
import React from "react";

import "../styles/App.css";

export default function Towns(props) {
  return <div className="townSpace">{props.town.name}</div>;
}
