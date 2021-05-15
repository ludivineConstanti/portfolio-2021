import PropTypes from "prop-types";

import { convertText } from "helpers/animation";
import { STitle, vLetter, SLetter } from "./STitle";
import { vStaggerChildren } from "style/SG";

const Title = ({ text, color, useCase }) => {
  return (
    <STitle
      s={{ color, useCase }}
      variants={vStaggerChildren}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      {convertText(text, "title", SLetter, vLetter)}
    </STitle>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  useCase: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Title.defaultProps = {
  color: "#FFF",
  useCase: false,
};

export default Title;
