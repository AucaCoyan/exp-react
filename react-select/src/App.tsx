import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  const [tasteInputValue, setTasteInputValue] = useState("");
  const [tasteFieldData, setTasteFieldData] = useState(null);
  const [toMenuIsOpen, setToMenuIsOpen] = useState(false);

  const handleToFieldInputChange = (value: any, action: any) => {
    if (action.action !== "input-blur" && action.action !== "menu-close") {
      setTasteInputValue(value);
      if (value.trim() === "") {
        setTasteFieldData(null);
      } else {
        setTasteFieldData({ value, label: value });
      }
    }
    setToMenuIsOpen(!!value.trim().length);
  };

  const handleToFieldChange = (item: any, action: any) => {
    if (action.action === "clear") {
      setTasteInputValue("");
    }
    setTasteFieldData(item);
  };

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Select
        isClearable
        menuIsOpen={toMenuIsOpen}
        inputValue={tasteInputValue}
        value={tasteFieldData}
        onInputChange={handleToFieldInputChange}
        onChange={handleToFieldChange}
        options={options}
        placeholder="Choose taste"
        isSearchable={true}
      />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
