import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { SSocialMedia } from "./SSocialMedia";
import { vScale } from "style/SG";

const MenuLink = ({ href, children }) => {
  // to use stagger children need to specify variant twice
  // one by putting the variant itself (and specifying animate, and initial on the parent)
  // and another time by putting it directly in the props
  // otherwise can just use the variant, but the hover effect will be on the parent, not individually
  return (
    <motion.li
      variants={vScale}
      whileHover={vScale.whileHover}
      animate={vScale.animate}
    >
      <SSocialMedia href={href} target="_blank" referrerpolicy="no-referrer">
        {children}
      </SSocialMedia>
    </motion.li>
  );
};

MenuLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default MenuLink;
