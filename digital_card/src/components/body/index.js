import "./style.css";
import Logo from "../../images/logo.png";
import Email from "../../images/Button.png";
import In from "../../images/Button1.png";
const Body = () => {
  return (
    <div className="body">
      <div className="Name">Saumitra Shukla</div>
      <div className="des">Software Engineer</div>
      <img className="im_1" src={Logo} alt="oops"></img>
      <div className="cust">
        <a href="mailto:saumitrashukla23@gmail.com?subject=write your subject&body=write your body">
          <img className="im_21" src={Email} alt="oops"></img>
        </a>
        <a href="https://www.linkedin.com/in/shukla23">
          <img className="im_22" src={In} alt="oops"></img>
        </a>
      </div>
      <div className="About">About</div>
      <p>
        I am a Software Engineer at Pentair and a frontend learner who loves to
        work on challenging projects.
      </p>
      <div className="Interests">Interests</div>
      <p>Outdoor Sports, Coding, Gaming, Singing.</p>
    </div>
  );
};

export default Body;
