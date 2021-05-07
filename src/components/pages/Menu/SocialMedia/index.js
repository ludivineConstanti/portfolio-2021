import PropTypes from "prop-types";

import { SSocialMedia } from "./SSocialMedia";

const MenuLink = ({ href, children }) => {
  return (
    <li>
      <SSocialMedia href={href} target="_blank" referrerpolicy="no-referrer">
        {children}
      </SSocialMedia>
    </li>
  );
};

MenuLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default MenuLink;
