import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="left">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <div className="right">
          <h2>Download 3 Free Emotional Intelligence Tools Pack PDF</h2>
          <p>By filling out your name and email address below.</p>

          <form>
            <input type="text" placeholder="Your first name" />
            <input type="text" placeholder="Email address" />
            <select name="" id="">
              <option value="job">Job</option>
            </select>
            <button type="submit">Download PDF</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
