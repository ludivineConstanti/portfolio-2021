import PropTypes from "prop-types";

import { convertText } from "helpers/animation";
import { STitle, vTitle, vLetter, SLetter } from "./STitle";

const Title = ({ text, color, useCase }) => {
  return (
    <STitle
      s={{ color, useCase }}
      variants={vTitle}
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
