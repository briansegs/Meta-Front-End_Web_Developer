import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setName("");
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" disabled={!name}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
