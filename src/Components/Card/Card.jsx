import "./Card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};

export default Card;
