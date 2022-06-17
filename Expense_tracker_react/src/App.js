import "./App.css";
import Card from "./components/UI/card";

const App = () => {
  return (
    <div className="App">
      <h1
        style={{
          display: "block",
          padding: "10px",
          fontWeight: "bolder",
          textAlign: "center"
        }}
      >
        Expense Tracker
      </h1>
      <Card />
    </div>
  );
};

export default App;
