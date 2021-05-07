import PropTypes from "prop-types";

import { SInfosProject, SContainer } from "./SInfosProject";
import Concept from "./Concept";
import Technos from "./Technos";
import Links from "./Links";

const InfosProject = ({
  concept,
  technos,
  color,
  backgroundColor,
  links,
  extraHeight,
}) => {
  return (
    <SInfosProject s={{ color, backgroundColor, extraHeight }}>
      {concept && (
        <SContainer
          s={{
            cStart: concept.grid.cStart,
            cSpan: concept.grid.cSpan,
            rStart: concept.grid.rStart,
            rSpan: concept.grid.rSpan,
          }}
        >
          <Concept text={concept.text} span={concept.grid.cSpan}></Concept>
        </SContainer>
      )}
      {technos && (
        <SContainer
          s={{
            cStart: technos.grid.cStart,
            cSpan: technos.grid.cSpan,
            rStart: technos.grid.rStart,
            rSpan: technos.grid.rSpan,
          }}
        >
          <Technos
            arrText={technos.text}
            color={color}
            cSpan={technos.grid.cSpan}
          ></Technos>
        </SContainer>
      )}
      {links && (
        <Links color={color} data={links.data} grid={links.grid}></Links>
      )}
    </SInfosProject>
  );
};

InfosProject.propTypes = {
  concept: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  technos: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  links: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  extraHeight: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

InfosProject.defaultProps = {
  concept: false,
  technos: false,
  links: false,
  extraHeight: "0px",
  color: "#FFF",
  backgroundColor: "#FFF",
};

export default InfosProject;
