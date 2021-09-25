import PropTypes from "prop-types";
import Button from "./Button";
const Header = (props) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1 style={headingStyle}>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

const headingStyle = {
  color: "red",
};

export default Header;
