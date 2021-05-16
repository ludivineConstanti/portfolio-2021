import MainSquare from "../MainSquare";
import Square from "../Square";

export const createIllu = (
  data,
  groupIndex,
  numPreviousGroups = 0,
  kanjisArr
) => {
  const formattedData = [];
  let counter = 0;
  for (let i = 0; i < data.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    data[i].forEach((square) => {
      counter += 1;
      if (square.main) {
        formattedData.push(
          <MainSquare
            key={`mainSquare${counter}__${groupIndex}`}
            size={square.s}
            columnStart={square.column}
            rowStart={square.row}
            color={square.c}
            kanjiIndex={numPreviousGroups + i}
            position={square.position || ""}
            kanjisArr={kanjisArr}
            animationCase={square.animationCase || ""}
          />
        );
      } else {
        formattedData.push(
          <Square
            key={`square${counter}__${groupIndex}`}
            size={square.s}
            columnStart={square.column}
            rowStart={square.row}
            color={square.c}
            kanjiIndex={numPreviousGroups + i}
            kanjisArrLength={kanjisArr.length}
            animationCase={square.animationCase || ""}
          />
        );
      }
    });
  }
  return formattedData;
};

export const returnFormattedArrs = (arrIllus, arrKanjis) => {
  const arrIllusFormatted = { withKanjis: [], withoutKanjis: [] };
  let beginAtIndex = 0;
  for (let i = 0; i < arrIllus.length; i += 1) {
    arrIllusFormatted.withKanjis.push(
      createIllu(arrIllus[i], i, beginAtIndex, arrKanjis)
    );
    arrIllusFormatted.withoutKanjis.push(
      createIllu(arrIllus[i], i, beginAtIndex, [])
    );
    beginAtIndex += arrIllus[i].length;
  }
  return arrIllusFormatted;
};
