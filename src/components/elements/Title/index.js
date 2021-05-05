import PropTypes from "prop-types";

import { STitle } from "./STitle";

const Title = ({ color, useCase, children }) => {
  return <STitle s={{ color, useCase }}>{children}</STitle>;
};

Title.propTypes = {
  color: PropTypes.string,
  useCase: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Title.defaultProps = {
  color: "#FFF",
  useCase: false,
};

export default Title;
