import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  SArrow,
  vArrow,
  SArrowBottom,
  SArrowMiddle,
  SArrowTop,
} from "./SArrow";
import { hoverButtonLink } from "style/SG";

const Arrow = ({ color, direction }) => {
  const [nVArrow, setNVArrow] = useState(vArrow);
  useEffect(() => {
    setNVArrow({
      ...vArrow,
      whileHover: { ...hoverButtonLink(direction), ...vArrow.whileHover },
    });
  }, []);
  return (
    <SArrow s={{ direction }} variants={nVArrow}>
      <SArrowMiddle s={{ color }}></SArrowMiddle>
      <SArrowTop s={{ color, direction }}></SArrowTop>
      <SArrowBottom s={{ color, direction }}></SArrowBottom>
    </SArrow>
  );
};

Arrow.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.string,
};

Arrow.defaultProps = {
  color: "#FFF",
  direction: "right",
};

export default Arrow;
