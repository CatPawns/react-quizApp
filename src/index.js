import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Toggle from"./Toggle";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Toggle />,document.getElementById("test2"));
class menu extends React.Component {
  render() {
     return (
        <div>
           <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           </ul>
           {this.props.children}
        </div>
     )
  }
}

