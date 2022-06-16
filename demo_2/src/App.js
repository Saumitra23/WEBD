import "./App.css";
import Card from "./components/UI/card";

const App = () => {
  return (
    <div className="App">
      <h1
        style={{
          display: "inline",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        Let's get started!
      </h1>
      <Card />
    </div>
  );
};

export default App;
