import PropTypes from "prop-types";

import { SMenuLink, vMenuLink } from "./SMenuLink";

const MenuLink = ({ text, to, setIsOpen }) => {
  return (
    <li>
      <SMenuLink
        exact
        to={to}
        onClick={() => {
          setIsOpen(false);
        }}
        variants={vMenuLink}
        whileHover={{ scale: 1.25, letterSpacing: "8px" }}
        animate={vMenuLink.animate}
      >
        {text}
      </SMenuLink>
    </li>
  );
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuLink;
