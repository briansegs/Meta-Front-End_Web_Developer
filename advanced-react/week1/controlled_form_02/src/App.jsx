import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Sorry we are insecure but we need you to either give us a good score or tell us why you wont. I know this is wasting your time but... insecure remember?"
      );
      return;
    }
    setComment("");
    setScore(10);
    console.log("Submit!");
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="field">
            <label htmlFor="score">Score: {score} ⭐</label>
            <input
              type="range"
              id="score"
              min={0}
              max={10}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="comment">
            <label htmlFor="comment">Comment: </label>
            <textarea
              value={comment}
              id="comment"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
