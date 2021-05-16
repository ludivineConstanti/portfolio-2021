import styled from "styled-components";
import {
  squareUnitM,
  squareUnit,
  squareUnitT,
  breakPointD,
  breakPointT,
  illuDimensions,
  illuCustomPos,
  borderMargins,
  borderMarginsM,
  sMenuIcon,
} from "style/g";

const goUp = `-${borderMargins + sMenuIcon}px`;
const goUpT = `-${borderMarginsM + sMenuIcon}px`;

export const SContainer = styled.div`
  position: relative;
  height: calc(${squareUnitM} * 25);
  ${breakPointT} {
    top: ${goUpT};
    margin-bottom: ${goUpT};
    height: calc(${squareUnitT} * 25);
  }
  ${breakPointD} {
    top: ${goUp};
    margin-bottom: ${goUp};
    height: calc(${squareUnit} * 25);
  }
`;

const dPlanet = illuDimensions(10, 10);

export const SPlanet = styled.div`
  ${dPlanet}
  left: calc(${squareUnitM} * 5);
  bottom: calc(${squareUnitM} * 15);
  ${breakPointD} {
    left: calc(${squareUnit} * 30);
    bottom: calc(${squareUnit} * 10);
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
