import styled from "styled-components";
import {
  illuDimensions,
  breakPointT,
  breakPointD,
  illuCustomPos,
  squareUnit,
  squareUnitT,
  squareUnitM,
} from "style/g";

export const SContainer = styled.div`
  position: relative;
  height: calc(${squareUnitM} * 40);
  ${breakPointT} {
    height: calc(${squareUnitT} * 35);
  }
  ${breakPointD} {
    height: calc(${squareUnit} * 35);
  }
`;

const dCloudTop = illuDimensions(4, 12);
const pCloudTop = illuCustomPos({
  left: { pos: [5, 15, 35] },
  bottom: { pos: [35, 25] },
});

export const SCloudTop = styled.div`
  ${dCloudTop}
  ${pCloudTop.left}
  ${pCloudTop.bottom}
`;

const oDragonR = 6;
const oDragonB = 4;

const dCRightM = 5;
const dCRightT = 15;
const dCRightD = 30;
const dCBottomM = 8;
const dCBottomT = 5;

const dDragon = illuDimensions(18, 27);
const pDragon = illuCustomPos({
  right: {
    pos: [oDragonR + dCRightM, oDragonR + dCRightT, oDragonR + dCRightD],
  },
  bottom: {
    pos: [oDragonB + dCBottomM, oDragonB + dCBottomT],
  },
});

export const SDragon = styled.div`
  ${dDragon}
  ${pDragon.right}
  ${pDragon.bottom}
`;

const dCloudDragon = illuDimensions(4, 30);
const pCloudDragon = illuCustomPos({
  right: { pos: [dCRightM, dCRightT, dCRightD] },
  bottom: { pos: [dCBottomM, dCBottomT] },
});

export const SCloudDragon = styled.div`
  ${dCloudDragon}
  ${pCloudDragon.right}
  ${pCloudDragon.bottom}
`;

const dCloudBL = illuDimensions(4, 16);
const pCloudBL = illuCustomPos({ left: { pos: [2, 10] } });

export const SCloudBL = styled.div`
  ${dCloudBL}
  ${pCloudBL.left}
  bottom: 0;
`;

const dCloudBR = illuDimensions(4, 15);

export const SCloudBR = styled.div`
  ${dCloudBR}
  right: 0;
  bottom: 0;
`;
