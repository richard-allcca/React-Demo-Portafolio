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
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import FloatingDiv from './../FloatingDiv/FloatingDiv';
// styles
import "./Intro.css";
import BlobBlue from "../../assets/icons/blob-blue";
import BlobYellow from "../../assets/icons/Blob-yellow";

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

  const getSharedButtons = () => {
    return (
      <div className="i-icons">
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
      </div>
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

        { getSharedButtons() }

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
          <img
            src={ glassesEmoji }
            alt="Emoji con lentes"
          />
        </div>
        {/* 
        <motion.div
          className="floating-div"
          initial={{ top: "-4%", left: "84%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4rem", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          className="floating-div"
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={thumbUp} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>

    </div>
  );
};

export default Intro;
