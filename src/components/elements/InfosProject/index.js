import PropTypes from "prop-types";

import { SInfosProject } from "./SInfosProject";
import Concept from "./Concept";
import Technos from "./Technos";

const InfosProject = ({ concept, technos, color }) => {
  return (
    <SInfosProject s={{ color }}>
      <Concept text={concept.text} columnCount={concept.columnCount}></Concept>
      <Technos arrText={technos}></Technos>
    </SInfosProject>
  );
};

InfosProject.propTypes = {
  concept: PropTypes.object.isRequired,
  technos: PropTypes.string.isRequired,
  color: PropTypes.string,
};

InfosProject.defaultProps = {
  color: "#FFF",
};

export default InfosProject;
