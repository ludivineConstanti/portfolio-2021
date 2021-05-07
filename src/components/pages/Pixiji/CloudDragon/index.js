// == Import npm
import React from "react";

// == Import
import Stars from "../Stars";
import { orangeL2, arrIlluFormatted } from "./dataIllu";
import {
  SContainer,
  SCloudTop,
  SDragon,
  SCloudDragon,
  SCloudBL,
  SCloudBR,
} from "./SCloudDragon";

const CloudDragon = () => (
  <SContainer>
    <Stars color={orangeL2} />
    <SCloudTop>{arrIlluFormatted[0]}</SCloudTop>
    <SDragon>{arrIlluFormatted[1]}</SDragon>
    <SCloudDragon>{arrIlluFormatted[2]}</SCloudDragon>
    <SCloudBL>{arrIlluFormatted[3]}</SCloudBL>
    <SCloudBR>{arrIlluFormatted[4]}</SCloudBR>
  </SContainer>
);

// == Export
export default CloudDragon;
