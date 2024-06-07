import reactLogo from "./assets/react.svg";
import "./App.css";
import Select from "./components/Select";
import { useState } from "react";
import { isValidEmail } from "./util";

function App() {
  const [job, setJob] = useState("Your profession");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameVisited, setNameVisted] = useState(false);
  const [emailVisited, setEmailVisted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Download for " + name + " sent to " + email);

    console.log({
      name: name,
      email: email,
      job: job,
    });

    clearForm();
  };

  const clearForm = () => {
    setJob("Your profession");
    setName("");
    setEmail("");
    setNameVisted(false);
    setEmailVisted(false);
  };

  const validForm = () => {
    return job !== "Your profession" && name.length >= 3 && isValidEmail(email)
      ? true
      : false;
  };

  const warnName = () => {
    return name.length < 3 && nameVisited;
  };

  const warnEmail = () => {
    return !isValidEmail(email) && emailVisited;
  };

  return (
    <div className="app">
      <div className="card">
        <div className="left">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <div className="right">
          <h2>Download 3 Free Emotional Intelligence Tools Pack PDF</h2>
          <p className="sub-text">
            By filling out your name and email address below.
          </p>

          <form onSubmit={handleSubmit} name="download">
            <div className="name">
              <input
                id="name"
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={() => setNameVisted(true)}
                style={!warnName() ? { marginBottom: "1.4rem" } : {}}
              />
              {warnName() && (
                <p className="warning">Name must be longer than 3 characters</p>
              )}
            </div>
            <div>
              <input
                id="email"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => setEmailVisted(true)}
                style={!warnEmail() ? { marginBottom: "1.4rem" } : {}}
              />
              {warnEmail() && (
                <p className="warning">Enter a valid email address</p>
              )}
            </div>

            <Select job={job} setJob={setJob} />
            <button type="submit" disabled={!validForm()}>
              Download PDF
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
