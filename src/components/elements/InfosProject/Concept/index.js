import PropTypes from "prop-types";

import { SText } from "./SConcept";
import TitleInfos from "components/elements/TitleInfos";

const Concept = ({ text, span }) => {
  return (
    <>
      <TitleInfos>Concept</TitleInfos>
      <SText s={{ span }}>{text}</SText>
    </>
  );
};

Concept.propTypes = {
  text: PropTypes.object.isRequired,
  span: PropTypes.number,
};

Concept.defaultProps = {
  columnCount: 1,
};

export default Concept;
