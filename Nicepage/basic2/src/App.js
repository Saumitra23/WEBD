import "./App.css";
import { slide as Menu } from "react-burger-menu";

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{ color: "RGB(187, 187, 187)" }}>logo</h1>
      </header>
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </div>
      <div className="main">
        <div className="el_1">
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/0aaea178def3575188426175/gggg-min.jpg"
            width={532}
            height={657}
          ></img>
        </div>
        <div className="el_2">
          <h1>Contact Form</h1>
          <form>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
            ></input>
            <input
              type="text"
              placeholder="Enter a valid email address"
              name="name"
            ></input>
            <input
              type="text"
              placeholder="Enter your message"
              name="name"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
