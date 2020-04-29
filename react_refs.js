//react_refs.js

// Editor: VSCode
// Color Theme: Ayu Theme
// Setting up development environment
// install node form node.org
// install create-react-app package
// ---npm i -g create-react-app
// ---install Simple react snippets extension VSCode

// create react app
// in terminal create-react-app myProject
// ---- installs
// -------- Development Server
// -------- Webpack (Bundling)
// -------- Babel (Transpiling) got to http://www.babeljs.io for more information

// Basic element creation
// use cdn of reactjs in index.html
// create a element in body section <div id="root"></div>
import React from "react";
import ReactDOM from "react-dom";

const element = (
  <h1>The good old hello, World that destroys people life!!!!!!</h1>
);
ReactDOM.render(element, document.getElementById("root"));

// Creating a Component
// ---src
// ----components
// ------ create your components here (best practice, not necessary)

import React, { Component } from "react";

// use camel case notation for namig your component (best practice)
class MyComponent extends Component {
  render() {
    return <h1>My first Component</h1>;
  }
}

// to reference the component in other jsx files
export default MyComponent;

// in index.js
import MyComponent from "./component/myComponent";
ReactDOM.render(<MyComponent />, document.getElementById("root"));
