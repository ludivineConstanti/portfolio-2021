import PropTypes from "prop-types";

import { SNavLink, SExternalLink } from "./SButtonLink";
import Arrow from "./Arrow";

const ButtonLink = ({
  children,
  path,
  external,
  color,
  marginBottom,
  direction,
}) => {
  return external ? (
    <SExternalLink
      href={path}
      target="_blank"
      rel="noreferrer"
      s={{ color, marginBottom, direction }}
    >
      {children}
      <Arrow color={color} direction={direction}></Arrow>
    </SExternalLink>
  ) : (
    <SNavLink to={path} s={{ color, marginBottom, direction }}>
      {children}
      <Arrow color={color} direction={direction}></Arrow>
    </SNavLink>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  external: PropTypes.bool,
  color: PropTypes.string,
  direction: PropTypes.string,
};

ButtonLink.defaultProps = {
  marginBottom: "0px",
  external: false,
  color: "#FFF",
  direction: "right",
};

export default ButtonLink;
