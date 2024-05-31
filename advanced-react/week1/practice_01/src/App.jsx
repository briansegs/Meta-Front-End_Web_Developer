import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="main">
      <h1>Practice 01</h1>

      <h2>After Submit:</h2>
      {message ? (
        <p className="message">{message}</p>
      ) : (
        <p className="before">Submit a message...</p>
      )}

      <form>
        <input type="text" value={value} onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
