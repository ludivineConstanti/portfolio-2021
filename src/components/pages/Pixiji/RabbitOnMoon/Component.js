// == Import npm
import PropTypes from "prop-types";

// == Import
import Stars from "../Stars";
import CTASquares from "../CTASquares";
import { SContainer, SPlanet, SRabbit, SMoon } from "./SRabbitOnMoon";

const RabbitOnMoon = ({ arrIlluFormatted, updateArrIllu }) => (
  <SContainer onClick={() => updateArrIllu("rabbitOnMoon")}>
    <Stars color="#FFDF8E" />
    <SPlanet>{arrIlluFormatted[0]}</SPlanet>
    <SRabbit>{arrIlluFormatted[1]}</SRabbit>
    <SMoon>{arrIlluFormatted[2]}</SMoon>
    <CTASquares></CTASquares>
  </SContainer>
);

RabbitOnMoon.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
  updateArrIllu: PropTypes.func.isRequired,
};

// == Export
export default RabbitOnMoon;
