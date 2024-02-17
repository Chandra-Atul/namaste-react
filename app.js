import React from "react";
import ReactDOM from "react-dom/client";



// React component

// class based component - OLD
// Functional Component - NEW

// A Function that returns a Piece of EJX Code is React funtional Component


// const fn1 = () => true;

// const fn2 = () =>{
//   return true;
// }

// both fn1 and fn2 are same


// React functional Component
// const HeadingComponent = () =>{
//   return <h1 id="heading">Namaste React Functional Component</h1>
// };


// component Composition


const HeadingComponent = () => (
  <div id="container">
    {/* this is how you put your React element inside your React component ---- {React element}*/}
    {Title}
    <h1 className="heading">Namaste React functional Component</h1>
  </div>
);


// React Element
const Title = (
    <h1 className="heading" tabIndex="1">
    Namaste React using JSX🚀 </h1>);


// both above written are same
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent); --- we can not render functional component in this way
// root.render(heading) 
// --- this is how we render React Element not React Component

// to render react Component

root.render(<HeadingComponent/>);

