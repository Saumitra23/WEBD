import "./App.css";
import Burger from "./components/burgerMenu";
import First from "./components/First";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Burger />
      <First /> */}
      <div>
        <Header />
      </div>
      <div>
        <Burger />
      </div>
      <div>
        <First />
      </div>
    </div>
  );
}

export default App;
