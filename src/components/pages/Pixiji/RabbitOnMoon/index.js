// == Import npm
import React from "react";

// == Import
import Stars from "../Stars";
import { arrIlluFormatted } from "./dataIllu";
import { SContainer, SPlanet, SRabbit, SMoon } from "./SRabbitOnMoon";

const RabbitOnMoon = () => (
  <SContainer>
    <Stars color="#FFDF8E" />
    <SPlanet>{arrIlluFormatted[0]}</SPlanet>
    <SRabbit>{arrIlluFormatted[1]}</SRabbit>
    <SMoon>{arrIlluFormatted[2]}</SMoon>
  </SContainer>
);
// == Export
export default RabbitOnMoon;
