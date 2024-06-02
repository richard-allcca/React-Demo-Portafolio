import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../context/Context";
// iconos
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Fiver from "../../img/fiver.png";
import Shopify from "../../img/Shopify.png";
// Iconos
import UpWork from "../../img/UpWork.png";
import "./Works.css";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        {/* left side */}
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
          voluptatum.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
          doloremque.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-10px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="w-secCircle">
            <img src={UpWork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiver} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* bacground circles */}
        <div className="w-backCircle blueCircle "></div>
        <div className="w-backCircle yellowCircle "></div>
      </div>
    </div>
  );
};

export default Works;
