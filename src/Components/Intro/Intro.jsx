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
import FloatingDiv from "./children/FloatingDiv/FloatingDiv";
import "./Intro.css";
import background from '../../assets/images/background.png';

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
        <div className="background">
          <img src={background} alt="background" />
        </div>
        <div className="i-boy" >
          <img src={ boy } alt="" />
        </div>
        <div className="i-emoji-glass" >
          <img src={ glassesEmoji } alt="Emoji con lentes" />
        </div>
        {/*  */}
        <div className="floating-div-1" >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div className="floating-div-2" >
          <FloatingDiv image={thumbUp} txt1="Best Design" txt2="Award" />
        </div>

      </div>

    </div>
  );
};

export default Intro;
