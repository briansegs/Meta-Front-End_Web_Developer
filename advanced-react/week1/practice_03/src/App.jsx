import reactLogo from "./assets/react.svg";
import "./App.css";
import Select from "./components/Select";
import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
            <input
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p>{email}</p>
            <Select job={job} setJob={setJob} />
            <button type="submit">Download PDF</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
