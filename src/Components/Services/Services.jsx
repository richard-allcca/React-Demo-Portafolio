import { motion } from "framer-motion";
import { useContext } from "react";
// cv pdf
import Resume from "../../assets/CV-05-2022-RICHARD.pdf";
import { themeContext } from "../../context/Context";
// images cards
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// styles
import "./Services.css";
const Services = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
          voluptatum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
          doloremque.
        </span>
        <a href={Resume}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
          style={{ left: "13rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-end Development"}
            details={"Html, Css, JavaScript, React"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Back-End Development"}
            details={"Node.js, Express, MongoDB"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UX/UI Design"}
            details={"usability, Accessibility, User Interface"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
