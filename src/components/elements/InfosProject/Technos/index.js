import PropTypes from "prop-types";

import { STechnos, STechnoEl } from "./STechnos";
import TitleInfos from "components/elements/TitleInfos";

const Technos = ({ arrText }) => {
  return (
    <STechnos>
      <TitleInfos>Technologies</TitleInfos>
      <ul>
        {arrText.map((techno, i) => (
          <STechnoEl key={`techno${i}`}>{techno}</STechnoEl>
        ))}
      </ul>
    </STechnos>
  );
};

Technos.propTypes = {
  arrText: PropTypes.array.isRequired,
};

export default Technos;
