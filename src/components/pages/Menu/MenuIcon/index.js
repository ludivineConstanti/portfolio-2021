import PropTypes from "prop-types";

import { SMenuIcon, SIconT, SIconM, SIconB } from "./SMenuIcon";

const MenuIcon = ({ color, onClick }) => {
  return (
    <SMenuIcon s={{ color }} onClick={onClick}>
      <SIconT s={{ color }}></SIconT>
      <SIconM s={{ color }}></SIconM>
      <SIconB s={{ color }}></SIconB>
    </SMenuIcon>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

MenuIcon.defaultProps = {
  color: "#FFF",
};

export default MenuIcon;
