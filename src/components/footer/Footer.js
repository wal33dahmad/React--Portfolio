import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Waleed
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#ontact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wal33dahmad">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/rajput.boii">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/rajput.boyyy">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Waleed Ahmad. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
