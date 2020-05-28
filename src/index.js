import React from "react";
import { render } from "react-dom";
import App from "./App";

window.onload = function () {
  if (localStorage.getItem("theme")) {
    document.getElementById("body").className =
      localStorage.getItem("theme") || "paper";
    console.log("Preferred theme: ", localStorage.getItem("theme"));
  } else {
    console.log("Default theme: ", body.className);
  }
};

render(<App />, document.getElementById("root"));
