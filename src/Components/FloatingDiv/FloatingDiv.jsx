import PropTypes from 'prop-types';
import "./FloatingDiv.css";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floating-div">
      <img src={image} alt="" />
      <span>
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

FloatingDiv.propTypes = {
  image: PropTypes.string,
  txt1: PropTypes.string,
  txt2: PropTypes.string,
};

export default FloatingDiv;