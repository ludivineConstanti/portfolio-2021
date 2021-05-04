import PropTypes from "prop-types";

import { SMenuLink } from "./SMenuLink";

const MenuLink = ({ text, to, setIsOpen }) => {
  return (
    <SMenuLink
      exact
      to={to}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      {text}
    </SMenuLink>
  );
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuLink;
