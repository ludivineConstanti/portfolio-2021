/* eslint-disable react/jsx-pascal-case */
import PropTypes from "prop-types";

import { SMenuIcon, vIcon, SIcon } from "./SMenuIcon";

const MenuIcon = ({ color, isOpen, onClick }) => {
  return (
    <SMenuIcon s={{ color }} onClick={onClick}>
      <SIcon.top>
        <SIcon.topRight
          variants={vIcon.topRight}
          animate={isOpen ? "aIsOpen" : "aIsClose"}
        ></SIcon.topRight>
        <SIcon.topLeft
          variants={vIcon.topLeft}
          animate={isOpen ? "aIsOpen" : "aIsClose"}
        ></SIcon.topLeft>
      </SIcon.top>
      <SIcon.middle
        variants={vIcon.middle}
        animate={isOpen ? "aIsOpen" : "aIsClose"}
      ></SIcon.middle>
      <SIcon.bottom>
        <SIcon.bottomRight
          variants={vIcon.bottomRight}
          animate={isOpen ? "aIsOpen" : "aIsClose"}
        ></SIcon.bottomRight>
        <SIcon.bottomLeft
          variants={vIcon.bottomLeft}
          animate={isOpen ? "aIsOpen" : "aIsClose"}
        ></SIcon.bottomLeft>
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
