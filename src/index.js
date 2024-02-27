import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>template text</p>;
}

render(<Hi />, document.getElementById("app"));
