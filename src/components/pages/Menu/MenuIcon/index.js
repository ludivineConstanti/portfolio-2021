/* eslint-disable react/jsx-pascal-case */
import PropTypes from "prop-types";

import { SMenuIcon, vMenuIcon, vIcon, SIcon } from "./SMenuIcon";

const MenuIcon = ({ color, isOpen, onClick }) => {
  return (
    <SMenuIcon
      s={{ color }}
      onClick={onClick}
      variants={vMenuIcon}
      initial="initial"
      exit="initial"
      animate={isOpen ? "aIsOpen" : "aIsClose"}
      whileHover="whileHover"
    >
      <SIcon.top>
        <SIcon.topRight variants={vIcon.topRight}></SIcon.topRight>
        <SIcon.topLeft variants={vIcon.topLeft}></SIcon.topLeft>
      </SIcon.top>
      <SIcon.middle variants={vIcon.middle}></SIcon.middle>
      <SIcon.bottom>
        <SIcon.bottomRight variants={vIcon.bottomRight}></SIcon.bottomRight>
        <SIcon.bottomLeft variants={vIcon.bottomLeft}></SIcon.bottomLeft>
      </SIcon.bottom>
    </SMenuIcon>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuIcon;
