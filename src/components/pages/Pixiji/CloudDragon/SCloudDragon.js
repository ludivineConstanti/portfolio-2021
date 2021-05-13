import styled from "styled-components";
import {
  illuDimensions,
  breakPointT,
  breakPointD,
  illuCustomPos,
} from "style/g";

export const SContainer = styled.div`
  position: relative;
  height: 80vw;
  ${breakPointT} {
    height: 70vw;
  }
  ${breakPointD} {
    height: 50vw;
  }
`;

const dCloudTop = illuDimensions(4, 12);
const pCloudTop = illuCustomPos({ right: { pos: [5] }, bottom: { pos: [33] } });

export const SCloudTop = styled.div`
  ${dCloudTop}
  ${pCloudTop.right}
  ${pCloudTop.bottom}
`;

const oDragonR = 6;
const oDragonB = 4;

const dCRightM = 5;
const dCRightT = 10;
const dCRightD = 20;
const dCBottomM = 7;

const dDragon = illuDimensions(18, 27);
const pDragon = illuCustomPos({
  right: {
    pos: [oDragonR + dCRightM, oDragonR + dCRightT, oDragonR + dCRightD],
  },
  bottom: {
    pos: [oDragonB + dCBottomM],
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
  bottom: { pos: [dCBottomM] },
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
