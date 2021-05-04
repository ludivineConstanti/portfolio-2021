import PropTypes from "prop-types";

import { STitle } from "./STitle";

const Title = ({ color, children }) => {
  return <STitle s={{ color }}>{children}</STitle>;
};

Title.propTypes = {
  color: PropTypes.string,
};

Title.defaultProps = {
  color: "#FFF",
};

export default Title;
