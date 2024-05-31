import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  };

  return (
    <div className="main">
      <h1>Practice 01</h1>

      <h2>After Submit:</h2>
      <p>Nothing happens right now...</p>

      <form>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
