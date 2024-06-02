// icons
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// images
import wave from "../../img/wave.png";
// styles
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} style={{ width: "100%" }} alt="" />
      <div className="f-content">
        <span>richard_allcca_llano@hotmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/thouma_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size="3rem" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100080815672425"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Facebook color="white" size="3rem" />
          </a>
          <a
            href="https://github.com/richard-allcca"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
