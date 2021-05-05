import PropTypes from "prop-types";

import { SNavLink, SExternalLink } from "./SButtonLink";
import Arrow from "./Arrow";

const ButtonLink = ({ children, path, external, color, useCase }) => {
  return external ? (
    <SExternalLink
      href={path}
      target="_blank"
      rel="noreferrer"
      s={{ color, useCase }}
    >
      {children}
      <Arrow color={color}></Arrow>
    </SExternalLink>
  ) : (
    <SNavLink to={path} s={{ color, useCase }}>
      {children}
      <Arrow color={color}></Arrow>
    </SNavLink>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  useCase: PropTypes.string,
  external: PropTypes.bool,
  color: PropTypes.string,
};

ButtonLink.defaultProps = {
  useCase: false,
  external: false,
  color: "#FFF",
};

export default ButtonLink;
