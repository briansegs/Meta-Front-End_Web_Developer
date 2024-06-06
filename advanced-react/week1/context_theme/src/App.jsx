import "./App.css";
import Switch from "./Switch";

const Title = ({ children }) => {
  return <h2>{children}</h2>;
};

const Header = () => {
  return (
    <div className="header">
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </div>
  );
};

const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

const Content = () => {
  return (
    <div className="content">
      <Title>When it comes to dough</Title>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
