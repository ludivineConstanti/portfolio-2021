import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { routes as r, routesKeys as rKeys } from "data/routes";
import { SBackground } from "./SApp";
// Pages
import Menu from "components/pages/Menu";
import Error404 from "components/pages/Error404";

const App = () => {
  const [color, setColor] = useState("#0e184f");

  const location = useLocation();

  useEffect(() => {
    let colorTemp = "#0e184f";
    rKeys.forEach((key) => {
      if (r[key].path === location.pathname) colorTemp = r[key].color;
      setColor(colorTemp);
    });
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <SBackground s={{ color }}></SBackground>
      <Menu color={color}></Menu>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          {rKeys.map((key) => (
            <Route
              path={r[key].path}
              key={r[key].path}
              exact
              component={r[key].component}
            />
          ))}
          <Route component={Error404} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
