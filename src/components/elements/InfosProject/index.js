import PropTypes from "prop-types";

import { SInfosProject, SLinks } from "./SInfosProject";
import Concept from "./Concept";
import Technos from "./Technos";
import ButtonLink from "components/elements/ButtonLink";
import { columnWidth } from "style/g";

const InfosProject = ({ concept, technos, color, lCode, lWebsite }) => {
  return (
    <SInfosProject s={{ color }}>
      {concept && (
        <Concept
          text={concept.text}
          columnCount={concept.columnCount}
        ></Concept>
      )}
      {technos && <Technos arrText={technos}></Technos>}
      <SLinks>
        {lCode && (
          <ButtonLink path="" external color={color} useCase="project">
            See code on Github
          </ButtonLink>
        )}
        {lWebsite && (
          <ButtonLink path="" external color={color} useCase="project">
            See website
          </ButtonLink>
        )}
      </SLinks>
    </SInfosProject>
  );
};

InfosProject.propTypes = {
  concept: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  technos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  lCode: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  lWebsite: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.string,
};

InfosProject.defaultProps = {
  concept: false,
  technos: false,
  lCode: false,
  lWebsite: false,
  color: "#FFF",
};

export default InfosProject;
