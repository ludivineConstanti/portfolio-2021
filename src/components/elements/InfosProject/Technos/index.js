import PropTypes from "prop-types";

import { STechnos, STechnosList, STechnoEl, SBulletPoint } from "./STechnos";
import TitleInfos from "components/elements/TitleInfos";

const Technos = ({ arrText, color, cSpan }) => {
  return (
    <STechnos>
      <TitleInfos>Technologies</TitleInfos>
      <STechnosList s={{ cSpan }}>
        {arrText.map((techno, i) => (
          <STechnoEl key={`techno${i}`}>
            <SBulletPoint s={{ color }}></SBulletPoint>
            {techno}
          </STechnoEl>
        ))}
      </STechnosList>
    </STechnos>
  );
};

Technos.propTypes = {
  arrText: PropTypes.array.isRequired,
  cSpan: PropTypes.number,
  color: PropTypes.string,
};

Technos.defaultProps = {
  cSpan: 1,
  color: "#FFF",
};

export default Technos;
