import React from "react";
import reactDom from "react-dom";
import App from "./app";
const mount = (el) => {
  reactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const toRender = document.querySelector("#_Marketing-dev");
  if (toRender) {
    mount(toRender);
  }
}

export { mount };
