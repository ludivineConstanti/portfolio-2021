import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import MenuIcon from "./MenuIcon";
import MenuContent from "./MenuContent";

const colorOpen = "#00404e";

const Menu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMenu, setColorMenu] = useState(color);
  useEffect(() => {
    setColorMenu(isOpen ? colorOpen : color);
  }, [isOpen, color]);
  return (
    <>
      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        color={colorMenu}
      ></MenuIcon>
      <AnimatePresence exitBeforeEnter>
        {isOpen && <MenuContent setIsOpen={setIsOpen}></MenuContent>}
      </AnimatePresence>
    </>
  );
};

export default Menu;
