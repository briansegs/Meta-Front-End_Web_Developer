import "./App.css";

const App = () => {
  return (
    <div>
      <form>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="field">
            <label htmlFor="firstName">
              First name <span>*</span>
            </label>
            <input type="text" placeholder="First name" id="firstName" />
          </div>

          <div className="field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" placeholder="Last name" id="lastName" />
          </div>

          <div className="field">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input type="text" placeholder="Email address" is="email" />
          </div>

          <div className="field">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input type="text" placeholder="Password" id="password" />
          </div>

          <div className="field">
            <label htmlFor="role">
              Role <span>*</span>
            </label>
            <select id="role" defaultValue="Role">
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button>CREATE ACCOUNT</button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
