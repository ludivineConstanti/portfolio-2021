import PropTypes from "prop-types";

import { SNavLink, SExternalLink } from "./SButtonLink";
import Arrow from "./Arrow";

const ButtonLink = ({ children, path, external, color, marginBottom }) => {
  return external ? (
    <SExternalLink
      href={path}
      target="_blank"
      rel="noreferrer"
      s={{ color, marginBottom }}
    >
      {children}
      <Arrow color={color}></Arrow>
    </SExternalLink>
  ) : (
    <SNavLink to={path} s={{ color, marginBottom }}>
      {children}
      <Arrow color={color}></Arrow>
    </SNavLink>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  external: PropTypes.bool,
  color: PropTypes.string,
};

ButtonLink.defaultProps = {
  marginBottom: "0px",
  external: false,
  color: "#FFF",
};

export default ButtonLink;
