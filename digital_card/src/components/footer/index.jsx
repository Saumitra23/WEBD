import "./style.css";
import FB from "../../icons/Facebook Icon.png";
import IG from "../../icons/Instagram Icon.png";
import TW from "../../icons/Twitter Icon.png";
import GH from "../../icons/GitHub Icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.facebook.com/ss.23.shukla/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FB} alt="oops"></img>
      </a>
      <a
        href="https://www.instagram.com/saumitra_23/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={IG} alt="oops"></img>
      </a>
      <a href="https://twitter.com/shuklaa_23" target="_blank" rel="noreferrer">
        <img src={TW} alt="oops"></img>
      </a>
      <a
        href="https://www.github.com/saumitra23/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GH} alt="oops"></img>
      </a>
    </div>
  );
};

export default Footer;
