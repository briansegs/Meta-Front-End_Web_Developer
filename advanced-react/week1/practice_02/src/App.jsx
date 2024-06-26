import { useState } from "react";
import { validateEmail } from "./utils";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassWord({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const getIsFormValid = () => {
    if (
      firstName &&
      email &&
      password.value.length >= 8 &&
      role !== "role" &&
      validateEmail(email)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="field">
            <label htmlFor="firstName">
              First name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              type={checked ? "text" : "password"}
              placeholder="Password"
              id="password"
              value={password.value}
              onChange={(e) =>
                setPassWord({ ...password, value: e.target.value })
              }
              onBlur={() => setPassWord({ ...password, isTouched: true })}
            />

            <div className="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label htmlFor="checkbox">Show Password</label>
            </div>

            {password.isTouched && password.value.length < 8 && (
              <p className="pass_warning">
                Password should have at least 8 characters
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="role">
              Role <span>*</span>
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            CREATE ACCOUNT
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
