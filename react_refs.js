//react_refs.js
//code ref: https://codesandbox.io/s/aged-glade-nz2x7?file

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

// ES6 modules
// Default -> import ... from '';
// Named -> import { ... } from '';

// ------Specifying children-----------
// To render multiple children elements from a react component, all the element must be wrapped
// inside one element. Otherwise, JSX will throw an error, because internally, the babel transpile the 
// component code into a React.CreateElement(type: String,....) which create an element. So, when it
// encounters multiple elements from a component it doesn't know which one to render. For example,

class Counter extends Components {
  render() {
    // it is showing JSX expressions must have one parent element
    return <h1>Hello, Component!!!</h1><button>Increment</button>
  }
}

// Solution
class Counter extends Components {
  render() {
    // we wrap the elements inside a div or
    // we can React.Fragment
    // Why closing parenthesis? because of JS auto semicolon insertion
    // JS will ignore anything after return statement.
    return (
      <div><h1>Hello, Component!!!</h1>
        <button>Increment</button></div>
    );
  }
}

// or

class Counter extends Components {
  render() {
    // we wrap the elements inside a div or
    // we can use React.Fragment. Advantage!! 
    // because above code will insert the redundant div element in the html
    return (
      <React.Fragment>
        <h1>Hello, Component!!!</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}


// ---------Embedding Expressions-----------

// to send data to component, we use state property
class Counter extends Component {
  state = {
    count: 0
  };

  // embedding expression using {}
  render() {
    return (
      <div>
        <span>{2 + 2}</span>
        <button>Increment</button>
      </div>
    );
  }
}

//** JSX expressions can be used as anything like function argument, value of a variable, return value, etc. */

// Setting Attribute, use camelCase naming for CSS attributes

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 10,
    fontweight: bold
  };

  // embedding expression using {}
  render() {
    return (
      <div>
        {/**
         * to add inline styles to an element, use the same caseCasing with a property
         * or you can use {{ }}
         */}
        <span style={this.styles} className="badge badge-primary m-2">Styling with a property</span>
        <span style={{ fontSize: 10, fontWeight: bold }}></span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
}

// rendering CSS classes dynamically

export class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.spanClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }

  spanClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }
}

// rendering lists
export class Counter extends Component {
  state = {
    tags: ["tags1", "tags2", "tags3"]
  };

  render() {
    return (
      <div>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    );
  }
}

// Conditional rendering
export class Counter extends Component {
  state = {
    tags: ["tags1", "tags2", "tags3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  render() {
    return (
      <div>
        {this.tags.length === 0 && "Please create new tags"}
        {this.renderTags}
      </div>
    );
  }
}

// Handling Events
export class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"]
  };

  obj = {
    name: "I'm from different obj"
  }
  constructor() {
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement() {
    // you cannot use this inside the function, becasue it depends on how the function is called
    // e.g, obj.method(), 'this' will refer to the current obj
    // if you call just function, 'this' will refer to the window object, but in strict mode it is undefined
    // to use 'this' inside function to use class level properties, we need to bind it
    // On the other hand, if we use an arrow fuction we don't have to bind it, becasue arrow functions inherit 'this'
    console.log(this.state.count);

    // to update the state
    this.setState({ count: this.state.count + 1 });
  }
}


// How updating elements works under the hood?
/**
 *              notifies   schedules   sends
 * this.setState() -> React -> render() -> VirtualDOM
 *                  comapares
 * VirtualDom: OldTree | NewTree, update the element that has changed
 */

// Passing arguments to Event Handlers
export class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"]
  };

  obj = {
    name: "I'm from different obj"
  }
  constructor() {
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(myVar) {
    console.log(myVar);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleIncrement(5)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

// props vs. state
// props -> send data between components
// ----access attributes
// ----read only
// ----cannot change the value of the source
// state -> internal to a component

// Composing Components
// use props to send data to the child components
// e.g <Counter key={c.id} value={c.value} />, so in the counter component
// we can access the value, (key is react's internal attribute) through props object.
// i.e, props is like a pipe, with that you can send down the data from the parent source to the 
// childs connected to it.

export class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(c => (
          // child component
          <Counter key={c.id} value={c.value} />
        ))}
      </React.Fragment>
    );
  }
}

export default class Counter extends Component {
  state = {
    count: this.props.value,
  };

  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }

  handleIncrement = myVar => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.spanClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}


// passing children -> this.props.children (elements between childrens e.g, <Counter><h4></h4></Counter>, h4 is the child element)
/**
 * props vs state
 * props - input to a component (read-only)
 * ----- common uses include passing data to child components
 * state - internal state of a component
 */

// Raising and Handling Events
class Counters extends Component {
  state = {
    counters: []
  }

  handleDelete = () => {
    console.log("Handle Delete");
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

// now raise the onDelete event on Counter Component

// Single Source of truth
// to sync multiple components reflect on the same data, we need a single source of truth
// i.e. we need a common ancestrial component which holds the state of the data.
// Controlled Component: doesn't have local state, it controlled by it's parent.

/**
 * Lifecycle Hooks
 *  1. Mount: constructor -> render -> componentDidMount
 *  2. Update: render -> componentDidUpdate
 *  3. Unmount: componentWillUnmount
 *
 * ---constructor()
 *    Typically, in React constructors are only used for two purposes:
 *      1. Initializing local state by assigning an object to this.state
 *      2. Bindind event handler methods to an instance
 */
