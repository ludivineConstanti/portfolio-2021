import PropTypes from "prop-types";

import { SButtonLink, SArrowStroke } from "./SButtonLink";

const ButtonLink = ({ text, path, color }) => {
  return (
    <SButtonLink to={path} s={{ color }}>
      {text}
      <SArrowStroke s={{ color }}></SArrowStroke>
    </SButtonLink>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ButtonLink.defaultProps = {
  color: "#FFF",
};

export default ButtonLink;
