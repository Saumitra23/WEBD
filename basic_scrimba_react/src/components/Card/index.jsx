import "./style.css";
import react_icon from "../images/react_icon.png";

const Card = () => {
  return (
    <div className="card">
      <h1>
        Fun facts about React
        <img className="cust_back" src={react_icon} alt="oops"></img>
      </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k starts on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>
          Powers thousands of enterprise apps, including{" "}
          <span className="duhh">mobile apps</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
