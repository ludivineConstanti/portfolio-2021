// sizes
export const sMenuIcon = 72;
export const sMenuIconM = 56;
export const sSocialMedia = 40;
export const strokeThickness = 4;

// margins
export const borderMargins = 80;
export const borderMarginsM = 20;
export const borderMargins3 = borderMargins * 2 + sMenuIcon;
export const borderMargins3M = borderMarginsM * 2 + sMenuIconM;
export const columnGap = 64;
export const rowGap = columnGap / 2;

// z-index
export const zIMenuIcon = 4;
export const zIMenu = 3;
export const zIMSContainerHover = 2;
export const zIDinoGame = 1;
export const zIInfosProject = 0;
export const zIBackground = -1;

// local z-index
export const zIMainSquareHover = 3;
export const zISquareHover = 2;
export const zIMainSquare = 1;

// Breakpoints
export const breakPointTNum = 576;
export const breakPointT = `@media only screen and (min-width: ${breakPointTNum}px)`;
export const breakPointDNum = 992;
export const breakPointD = `@media only screen and (min-width: ${breakPointDNum}px)`;

// for Illu of Pixiji
export const squareUnitM = "2vw";
export const squareUnitT = "1.2vw";
export const squareUnit = "0.8vw";

//

export const stButton = `
  padding: 24px;
  height: 8px;
  display: flex;
  align-items: center;
  border-radius: 80px;
`;

// for Illu of Pixiji
export const illuDimensions = (height, width) => `
  position: absolute;
  display: grid;
  grid-template: repeat(${height}, 1fr) / repeat(${width}, 1fr);
  height: calc(${height} * ${squareUnitM});
  width: calc(${width} * ${squareUnitM});
  :hover {
    z-index: ${zIMSContainerHover};
  }
  ${breakPointT} {
    height: calc(${height} * ${squareUnitT});
    width: calc(${width} * ${squareUnitT});
  }
  ${breakPointD} {
    height: calc(${height} * ${squareUnit});
    width: calc(${width} * ${squareUnit});
  }
  `;
export const illuCustomPos = (objProp) => {
  // need an object with the properties that you want to use
  // those properties have an array of 3 coordinates (mobile, tablet, desktop)
  // and an other property to say if you need the buttonMargin to be added or not
  // ex: { bottom: {pos: [3, 12, 3], sC: 'buttonWidth'}} sC => special case
  // the array works with 1, 2 or 3 values, and sC can be skipped
  // 1 value => same value for all, 2 values => 1rst value for mobile, 2nd for tablet and desktop
  // so the minimum prop you need to give as an argument { right: { pos: [3] }}
  const result = {};
  const arrPos = Object.keys(objProp);
  for (let i = 0; i < arrPos.length; i += 1) {
    // eslint-disable-next-line no-nested-ternary
    result[arrPos[i]] = `
        ${arrPos[i]}: calc(${objProp[arrPos[i]].pos[0]} * ${squareUnitM} );
        ${breakPointT} {
          ${arrPos[i]}: calc(${
      objProp[arrPos[i]].pos[1] || objProp[arrPos[i]].pos[0]
    } * ${squareUnitT} );
        }
        ${breakPointD} {
          ${arrPos[i]}: calc(${
      objProp[arrPos[i]].pos[2] ||
      objProp[arrPos[i]].pos[1] ||
      objProp[arrPos[i]].pos[0]
    } * ${squareUnit} );
        }
      `;
  }
  return result;
};
