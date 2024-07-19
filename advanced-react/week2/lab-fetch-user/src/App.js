import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return Object.keys(user).length > 0 ? (
    <section className="App">
      <div className="card">
        <h1>Customer data</h1>
        <h2>
          Name:{" "}
          <span style={{ color: "lightblue" }}>
            {user.results[0].name.first}
          </span>
        </h2>
        <img
          src={user.results[0].picture.large}
          alt="head-shot"
          height={130}
          width={130}
        />
      </div>
    </section>
  ) : (
    <h1>Pending data...</h1>
  );
}

export default App;
