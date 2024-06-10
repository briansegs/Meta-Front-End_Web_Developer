import { useState } from "react";
import "./App.css";

const Goalform = (props) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ ...formData, goal: "", by: "" });
  }

  return (
    <div>
      <h1>My little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={changeHandler}
          placeholder="Goal"
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          onChange={changeHandler}
          placeholder="By..."
        />
        <button>Submit Goal</button>
      </form>
    </div>
  );
};

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
    console.log(`App - allGoals: ${allGoals}`);
  }

  return (
    <div>
      <Goalform onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default App;
