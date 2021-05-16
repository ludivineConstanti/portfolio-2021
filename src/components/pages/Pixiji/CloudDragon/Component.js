// == Import npm
import PropTypes from "prop-types";

// == Import
import Stars from "../Stars";
import { orangeL2 } from "./dataIllu";
import {
  SContainer,
  SCloudTop,
  SDragon,
  SCloudDragon,
  SCloudBL,
  SCloudBR,
} from "./SCloudDragon";

const CloudDragon = ({ arrIlluFormatted, updateArrIllu }) => (
  <SContainer onClick={() => updateArrIllu("cloudDragon")}>
    <Stars color={orangeL2} />
    <SCloudTop>{arrIlluFormatted[0]}</SCloudTop>
    <SDragon>{arrIlluFormatted[1]}</SDragon>
    <SCloudDragon>{arrIlluFormatted[2]}</SCloudDragon>
    <SCloudBL>{arrIlluFormatted[3]}</SCloudBL>
    <SCloudBR>{arrIlluFormatted[4]}</SCloudBR>
  </SContainer>
);

CloudDragon.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
  updateArrIllu: PropTypes.func.isRequired,
};

// == Export
export default CloudDragon;
