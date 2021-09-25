import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaulProps = {
  color: "steelblue",
};

Button.defaulProps = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.function,
};
export default Button;
