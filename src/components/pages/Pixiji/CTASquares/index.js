// == Import npm
import PropTypes from "prop-types";
import { SCTASquares, SText1, vText1, SText2, vText2 } from "./SCTASquares";

const CTASquares = () => (
  <SCTASquares initial="initial" animate="animate">
    <SText1 variants={vText1}>Click</SText1>
    <SText2 variants={vText2}>Hover the squares</SText2>
  </SCTASquares>
);

CTASquares.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
  updateArrIllu: PropTypes.func.isRequired,
};

// == Export
export default CTASquares;
