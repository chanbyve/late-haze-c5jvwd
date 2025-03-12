import React from "react";
import Wheel from "./components/Wheel";
import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.places = ["Marjon", "Kaye", "Fritz", "Sharia", "Katrina"];
  }

  render() {
    return (
      <div className="App">
        <h1>PAYROLL MAKER</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

export default App;
