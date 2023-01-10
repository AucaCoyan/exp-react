import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Dropdown>
          <Dropdown.Toggle variant="sucess" id="dropdown-basic">
            desplegar calendario
            <Dropdown.Menu>
              <DateRangePicker ranges={[selectionRange]} />{" "}
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
      </header>
    </div>
  );
}

export default App;
