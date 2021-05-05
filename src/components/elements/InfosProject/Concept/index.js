import PropTypes from "prop-types";

import { SConcept, SText } from "./SConcept";
import TitleInfos from "components/elements/TitleInfos";

const Concept = ({ text, columnCount }) => {
  return (
    <SConcept s={{ columnCount }}>
      <TitleInfos>Concept</TitleInfos>
      <SText s={{ columnCount }}>{text}</SText>
    </SConcept>
  );
};

Concept.propTypes = {
  text: PropTypes.string.isRequired,
  columnCount: PropTypes.number,
};

Concept.defaultProps = {
  columnCount: 1,
};

export default Concept;
