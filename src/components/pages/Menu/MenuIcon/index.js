import PropTypes from "prop-types";

import { SMenuIcon, SIconT, SIconM, SIconB } from "./SMenuIcon";

const MenuIcon = ({ color, onClick }) => {
  return (
    <SMenuIcon s={{ color }} onClick={onClick}>
      <SIconT></SIconT>
      <SIconM></SIconM>
      <SIconB></SIconB>
    </SMenuIcon>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default MenuIcon;
