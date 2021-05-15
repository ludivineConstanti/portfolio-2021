import { breakPointT, breakPointD } from "./g";

export const tTitle = `
    font-family: utopia-std-headline;
    font-size: 15vw;
    ${breakPointT} {
        font-size: 10vw;
    }
    ${breakPointD} {
        font-size: 5vw;
    }
`;

export const tSubtitle = `
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 34px;
`;

export const tText = `
    letter-spacing: 3px;
    font-size: 16px;
    line-height: 20px;
`;

export const tTextProject = `
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 17px;
`;

export const tButtonLinkSpacing = 4;

export const tButtonLink = `
    text-transform: uppercase;
    letter-spacing: ${tButtonLinkSpacing}px;
    font-size: 16px;
`;

export const tMenuLink = `
    font-family: utopia-std-headline;
    font-size: 48px;
    line-height: 72px;
`;

export const tDinoGame = `
    font-family: utopia-std-headline;
    font-size: 8vw;
    ${breakPointT} {
        font-size: 48px;
    }
`;

// illu of Pixiji project

export const tMSIFontSize = "12";
export const tMSIBFontSize = "9";

export const tMSquareInfos = `
    color: white;
    letter-spacing: 0.75px;
`;
export const tMSquareKanji = `
    color: white;
    font-size: 20px;
`;
export const tMSquareInfosBottom = `
    color: white;
    letter-spacing: 4px;
    text-transform: uppercase;
`;
