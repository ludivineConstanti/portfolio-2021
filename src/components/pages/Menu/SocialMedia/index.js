import PropTypes from "prop-types";

import { SSocialMedia } from "./SSocialMedia";

const MenuLink = ({ href, children }) => {
  return (
    <SSocialMedia href={href} target="_blank" referrerpolicy="no-referrer">
      {children}
    </SSocialMedia>
  );
};

MenuLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default MenuLink;
