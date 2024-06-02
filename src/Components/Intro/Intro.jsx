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

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Richard A. Llano</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, prodcuting the Quality work
          </span>
        </div>

        {/* reemplazo de boton con Link */}
        {/* <button className="button i-button">Hire me</button> */}
        <Link
          spy={true}
          to="Contacto"
          smooth={true}
          className="button i-button"
        >
          Hire me
        </Link>

        <div className="i-icons">
          <a
            href="http://github.com/richard-allcca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-allcca-llano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/thouma_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* imagenes */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={{ transition }}
          src={glassesEmoji}
          alt="Emoji con lentes"
        />
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
        ></div>
      </div>
    </div>
  );
};

export default Intro;
