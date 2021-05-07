import styled from "styled-components";
import {
  squareUnitT,
  squareUnitM,
  squareUnit,
  breakPointT,
  breakPointD,
  illuDimensions,
  illuCustomPos,
} from "style/g";

export const SContainer = styled.div`
  position: relative;
  height: 45vh;
`;

const dPlanet = illuDimensions(10, 10);

export const SPlanet = styled.div`
  ${dPlanet}
  left: calc(${squareUnitM} * 5);
  bottom: calc(${squareUnitM} * 32);
  ${breakPointT} {
    bottom: calc(${squareUnitT} * 22);
  }
  ${breakPointD} {
    left: calc(${squareUnit} * 18);
    top: calc(${squareUnit});
  }
`;

const dRabbit = illuDimensions(15, 11);
const pRabbit = illuCustomPos({
  right: { pos: [7 + 5] },
  bottom: { pos: [14] },
});

export const SRabbit = styled.div`
  ${dRabbit}
  ${pRabbit.bottom}
  ${pRabbit.right}
`;

const dMoon = illuDimensions(14, 28);
const pMoon = illuCustomPos({ right: { pos: [5] } });

export const SMoon = styled.div`
  ${dMoon}
  ${pMoon.right}
  bottom: 0;
`;
