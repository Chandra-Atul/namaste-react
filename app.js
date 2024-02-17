import React from "react";
import ReactDOM from "react-dom/client";

// React Element


// React.createElement =>ReactElement-JS Object => htmlElement(render)

// const heading  = React.createElement("h1",
//      {id: "heading"},
//       "Namaste React🚀"
// );

// console.log(heading);




// JSX --- it is not the part of React both are different

// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

//JSX => React.createElement => ReactElement-JS OBject => HTML Elemeht(render) 

const jsxHeading  = <h1 className="heading" tabIndex="1"> Namaste React using JSX🚀 </h1>
// JSX -- it is not html inside js 
// JSX -- HTML like or XML like syntax

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
