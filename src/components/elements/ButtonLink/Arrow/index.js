import PropTypes from "prop-types";

import { SArrow, SArrowBottom, SArrowMiddle, SArrowTop } from "./SArrow";

const Arrow = ({ color }) => {
  return (
    <SArrow>
      <SArrowMiddle s={{ color }}></SArrowMiddle>
      <SArrowTop s={{ color }}></SArrowTop>
      <SArrowBottom s={{ color }}></SArrowBottom>
    </SArrow>
  );
};

Arrow.propTypes = {
  color: PropTypes.string,
};

Arrow.defaultProps = {
  color: "#FFF",
};

export default Arrow;
