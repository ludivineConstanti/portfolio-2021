import PropTypes from "prop-types";

import ButtonLink from "components/elements/ButtonLink";
import { useCases } from "./data.js";
import { rowGap } from "style/g";
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
              marginBottom={link.marginBottom ? `${rowGap}px` : "0px"}
              direction={link.direction}
            >
              {useCases[link.useCase].text}
            </ButtonLink>
          ))}
        </SContainer>
      ) : (
        data.map((link, i) => (
          <SContainer
            key={`linkContainer${i}link.path`}
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
              marginBottom={link.marginBottom ? `${rowGap}px` : "0px"}
              direction={link.direction}
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
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
};

Links.defaultProps = {
  color: "#FFF",
  grid: false,
};

export default Links;
