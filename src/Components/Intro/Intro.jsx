// animation
import { motion } from "framer-motion";
// context
import { useContext } from "react";
import { Link } from "react-scroll/modules";
import { themeContext } from "../../context/Context";
// components
import boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Github from "../../img/github.png";
import glassesEmoji from "../../img/glassesEmoji.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedIn.png";
import thumbUp from "../../img/thumbUp.png";
// styles
import BlobBlue from "../../assets/icons/blob-blue";
import BlobYellow from "../../assets/icons/Blob-yellow";
import FloatingDiv from "./children/FloatingDiv/FloatingDiv";
import "./Intro.css";

const listSociaNetworks = [
  {
    name: "Github",
    link: "http://github.com/richard-allcca",
    icon: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/richard-allcca-llano/",
    icon: LinkedIn,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/r.allcca/",
    icon: Instagram,
  },
];

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const getSocialButtons = () => {
    return (
      <>
        {
          listSociaNetworks.map((item, index) => (
            <a
              href={ item.link }
              target="_blank"
              rel="noopener noreferrer"
              key={ index }
            >
              <img src={ item.icon } alt={ item.name } />
            </a>
          ))
        }
      </>
    );
  };

  return (
    <div className="intro">

      <div className="i-description">
        <div className="i-name">
          <span style={ { color: darkMode ? "white" : "" } }>Hi! I Am</span>
          <span>Richard A. Llano</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, prodcuting the Quality work
          </span>
        </div>

        <Link
          spy={ true }
          to="Contacto"
          smooth={ true }
          className="i-button"
        >
          Hire me
        </Link>

        <div className="i-social-icons">
          { getSocialButtons() }
        </div>
      </div>

      <div className="i-images">
        <div className="blob-blue">
          <BlobBlue />
        </div>
        <div className="blob-yellow" >
          <BlobYellow />
        </div>
        <div className="i-boy" >
          <img src={ boy } alt="" />
        </div>
        <div className="i-emoji-glass" >
          <img src={ glassesEmoji } alt="Emoji con lentes" />
        </div>
        {/*  */}
        <motion.div
          className="floating-div"
          initial={{ top: "0%", left: "0%" }}
          whileInView={{ left: "59%" }}
          transition={transition}
          style={{ top: "-4rem", left: "59%" }}
          >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          className="floating-div"
          initial={{ bottom: "4%", right: "0%" }}
          whileInView={{ right: "59%" }}
          transition={transition}
          style={{ bottom: "4%", right: "59%" }}
          >
          <FloatingDiv image={thumbUp} txt1="Best Design" txt2="Award" />
        </motion.div>

      </div>

    </div>
  );
};

export default Intro;
