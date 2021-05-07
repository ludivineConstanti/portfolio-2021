import PropTypes from "prop-types";

import ButtonLink from "components/elements/ButtonLink";
import { useCases } from "./data.js";
import { strokeThickness } from "style/g";
import { SContainer } from "./SLinks";

const Links = ({ grid, data, color }) => {
  return (
    <>
      {grid ? (
        <SContainer
          s={{
            cStart: grid.cStart,
            cSpan: grid.cSpan,
            rStart: grid.rStart,
            rSpan: grid.rSpan,
          }}
        >
          {data.map((link, i) => (
            <ButtonLink
              key={`buttonLink${link.useCase}${i}`}
              path={link.path}
              external={useCases[link.useCase].external}
              color={color}
              marginBottom={
                link.marginBottom ? `${strokeThickness / 2}px` : "0px"
              }
            >
              {useCases[link.useCase].text}
            </ButtonLink>
          ))}
        </SContainer>
      ) : (
        data.map((link, i) => (
          <SContainer
            s={{
              cStart: link.grid.cStart,
              cSpan: link.grid.cSpan,
              rStart: link.grid.rStart,
              rSpan: link.grid.rSpan,
            }}
          >
            <ButtonLink
              key={`buttonLink${link.useCase}${i}`}
              path={link.path}
              external={useCases[link.useCase].external}
              color={color}
              marginBottom={
                link.marginBottom ? `${strokeThickness / 2}px` : "0px"
              }
            >
              {useCases[link.useCase].text}
            </ButtonLink>
          </SContainer>
        ))
      )}
    </>
  );
};

Links.propTypes = {
  grid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  data: PropTypes.object.isRequired,
  color: PropTypes.string,
};

Links.defaultProps = {
  color: "#FFF",
  grid: false,
};

export default Links;
