/* eslint-disable react-hooks/exhaustive-deps */
// == Import npm
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Color } from "framer";

// == Import
import { zIMainSquareHover } from "style/g";
import { tMSIFontSize } from "style/typo";
import { motion } from "framer-motion";
import { aAnimateOn } from "../helpers/animation";
import SMainSquare, { SKanji, SInfos } from "./SMainSquare";

const MainSquare = ({
  size,
  columnStart,
  rowStart,
  color,
  position,
  kanjiIndex,
  kanjisArr,
}) => {
  const [answer, setAnswer] = useState(false);
  const [vMainSquare, setVMainSquare] = useState({
    initial: { scale: 0 },
    animateOff: { scale: 0.2 },
    animateOn: aAnimateOn,
    whileHoverEmpty: { scale: 1.5 },
  });
  const [vInfos, setVInfos] = useState({
    infos: {},
    kana: {},
    kanji: {},
  });

  useEffect(() => {
    const margin = 4;

    const colorI = Color(color);
    let colorD1 = Color.darken(colorI, colorI.l * 30);
    colorD1 = Color.toHexString(Color.desaturate(colorD1, colorI.l * 15));
    const scaleFactor = 8 / size;

    setVMainSquare({
      ...vMainSquare,
      whileHoverOn: {
        scale: scaleFactor,
        zIndex: zIMainSquareHover,
        transformOrigin: position,
        padding: `${margin / scaleFactor}px`,
        backgroundColor: colorD1,
        transition: { type: "spring", damping: 15 },
      },
    });

    setVInfos({
      infos: {
        initial: { fontSize: 0 },
        whileHoverOn: {
          display: "block",
          opacity: 1,
          fontSize: `${tMSIFontSize / scaleFactor}px`,
        },
      },
      kana: {
        whileHoverOn: { marginRight: `${margin / scaleFactor}px` },
      },
      kanji: {
        whileHoverOn: {
          fontSize: `${20 / scaleFactor}px`,
          margin: `${margin / scaleFactor}px`,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (!answer && kanjisArr[kanjiIndex]) {
      if (kanjisArr[kanjiIndex].answer) {
        setAnswer(kanjisArr[kanjiIndex].answer);
      } else {
        setAnswer(kanjisArr[kanjiIndex]);
      }
    } else if (!kanjisArr.length) {
      setAnswer(false);
    }
    // checkForAnimation();
  }, [kanjisArr]);

  return (
    <SMainSquare
      s={{
        color,
        size,
        columnStart,
        rowStart,
      }}
      variants={vMainSquare}
      initial="initial"
      animate={kanjisArr.length > kanjiIndex ? "animateOn" : "animateOff"}
      // eslint-disable-next-line no-nested-ternary
      whileHover={
        !answer.kanji && kanjisArr.length > kanjiIndex
          ? "whileHoverEmpty"
          : kanjisArr.length > kanjiIndex
          ? "whileHoverOn"
          : "whileHoverOff"
      }
      onMouseEnter={() =>
        setVMainSquare({ ...vMainSquare, animateOn: aAnimateOn })
      }
      exit="initial"
    >
      {answer && (
        <>
          <SInfos variants={vInfos.infos}>
            <motion.span variants={vInfos.kana}>{answer.kana}</motion.span>
            {answer.kanaEn}
          </SInfos>
          <SKanji variants={vInfos.kanji}>{answer.kanji}</SKanji>
          <SInfos variants={vInfos.infos}>{answer.en}</SInfos>
        </>
      )}
    </SMainSquare>
  );
};

MainSquare.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default MainSquare;
