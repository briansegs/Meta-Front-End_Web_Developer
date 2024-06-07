import reactLogo from "./assets/react.svg";
import "./App.css";
import Select from "./components/Select";
import { useState } from "react";
import { isValidEmail } from "./util";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

function App() {
  const { theme } = useTheme();

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
    <div
      className="app"
      style={{ backgroundColor: theme === "light" ? "#dfdfe6" : "#1f1d27" }}
    >
      <Switch />

      <div
        className="card"
        style={{
          backgroundColor: theme === "light" ? "white" : "#17171f",
          border: theme === "light" ? "1px solid #e6f1f1" : "1px solid #080811",
        }}
      >
        <div
          className="left"
          style={{ backgroundColor: theme === "light" ? "#e6f1f1" : "#080811" }}
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <div className="right">
          <h2 style={{ color: theme === "light" ? "black" : "slategray" }}>
            Download 3 Free Emotional Intelligence Tools Pack PDF
          </h2>
          <p
            className="sub-text"
            style={{ color: theme === "light" ? "black" : "slategray" }}
          >
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
                <p
                  className="warning"
                  style={{
                    color: theme === "light" ? "#fc4646" : "lightskyblue",
                  }}
                >
                  Name must be longer than 3 characters
                </p>
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
                <p
                  className="warning"
                  style={{
                    color: theme === "light" ? "#fc4646" : "lightskyblue",
                  }}
                >
                  Enter a valid email address
                </p>
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

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
