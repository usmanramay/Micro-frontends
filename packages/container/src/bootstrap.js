import React from "react";
import reactDom from "react-dom";
import App from "./app";
reactDom.render(<App />, document.querySelector("#_host-contianer"));
// const mount = (el) => {
// };

// if (process.env.NODE_ENV === "development") {
//   const toRender = document.querySelector("#_host-contianer");
//   if (toRender) {
//     mount(toRender);
//   }
// }

// export { mount };
