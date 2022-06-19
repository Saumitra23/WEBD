import "./App.css";
import { slide as Menu } from "react-burger-menu";
import { SocialMediaIconsReact } from "social-media-icons-react";

function App() {
  return (
    <div className="App">
      <div className="menu">
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
      <div className="head" style={{ color: "RGB(187, 187, 187)" }}>
        logo
      </div>
      <div className="main">
        <div className="el_1">
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/0aaea178def3575188426175/gggg-min.jpg"
            width={472}
            height={597}
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
            <textarea placeholder="Enter your message" name="name"></textarea>
          </form>
          <button>Submit</button>
          <h1>Follow us</h1>
          <div className="icons">
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="2"
                borderStyle="solid"
                icon="twitter"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(26,166,233,1)"
                iconSize="5"
                roundness="20%"
                url="https://some-website.com/my-social-media-url"
                size="30"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="2"
                borderStyle="solid"
                icon="facebook"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="RGB(24, 119, 242)"
                iconSize="5"
                roundness="20%"
                url="https://some-website.com/my-social-media-url"
                size="30"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="2"
                borderStyle="solid"
                icon="instagram"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="RGB(199, 60, 143)"
                iconSize="5"
                roundness="20%"
                url="https://some-website.com/my-social-media-url"
                size="30"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="2"
                borderStyle="solid"
                icon="github"
                iconColor="black"
                backgroundColor="RGB(205, 217, 229)"
                iconSize="5"
                roundness="20%"
                url="https://some-website.com/my-social-media-url"
                size="30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
