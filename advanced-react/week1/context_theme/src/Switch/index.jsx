import "./Styles.css";

const Switch = () => {
  const theme = "light";
  return (
    <label className="switch">
      <input type="checkbox" checked={theme === "light"} />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
