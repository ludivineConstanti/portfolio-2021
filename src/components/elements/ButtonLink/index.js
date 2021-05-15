import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { SNavLink, SExternalLink, vLink, SText, vText } from "./SButtonLink";
import Arrow from "./Arrow";
import { hoverButtonLink } from "style/SG";

const ButtonLink = ({
  text,
  path,
  external,
  color,
  marginBottom,
  direction,
}) => {
  const Component = external ? SExternalLink : SNavLink;
  const [nVText, setNVText] = useState(vText);
  useEffect(() => {
    setNVText({
      ...vText,
      whileHover: { ...hoverButtonLink(direction), ...vText.whileHover },
    });
  }, []);
  return (
    <Component
      href={path}
      to={path}
      target={external ? "_blank" : ""}
      rel="noreferrer"
      s={{ color, marginBottom, direction }}
      variants={vLink}
      initial="initial"
      animate="animate"
      exit="initial"
      whileHover="whileHover"
    >
      <SText variants={nVText}>{text}</SText>
      <Arrow color={color} direction={direction}></Arrow>
    </Component>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
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
