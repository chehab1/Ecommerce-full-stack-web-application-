import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div id="footer">
      <div id="footerElements">
        <a href="https://www.facebook.com">
          <BsFacebook id="facebookLogo"></BsFacebook>
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram id="instagramLogo"></AiFillInstagram>
        </a>
        <a href="mailto:chehabgalaxy@gmail.com">
          <MdEmail id="mailLogo"></MdEmail>
        </a>
      </div>
    </div>
  );
}

export default Footer;
