import PropTypes from "prop-types";

import { STitleInfos } from "./STitleInfos";

const TitleInfos = ({ color, children }) => {
  return <STitleInfos s={{ color }}>{children}</STitleInfos>;
};

TitleInfos.propTypes = {
  color: PropTypes.string,
};

TitleInfos.defaultProps = {
  color: "#FFF",
};

export default TitleInfos;
