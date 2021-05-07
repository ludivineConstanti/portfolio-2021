import PropTypes from "prop-types";

import { SArrow, SArrowBottom, SArrowMiddle, SArrowTop } from "./SArrow";

const Arrow = ({ color, direction }) => {
  return (
    <SArrow s={{ direction }}>
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
