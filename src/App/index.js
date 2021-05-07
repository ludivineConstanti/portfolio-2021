import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { routes as r, routesKeys as rKeys } from "data/routes";
import { SBackground } from "./SApp";
// Pages
import Menu from "components/pages/Menu";
import Home from "components/pages/Home";
import Pixiji from "components/pages/Pixiji";
import Dino404 from "components/pages/Dino404";
import Blockchain from "components/pages/Blockchain";
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
  }, [location]);
  return (
    <>
      <SBackground s={{ color }}></SBackground>
      <Menu color={color}></Menu>
      <Switch>
        <Route path={r.home.path} exact component={Home} />
        <Route path={r.project1.path} exact component={Pixiji} />
        <Route path={r.project2.path} exact component={Dino404} />
        <Route path={r.project3.path} exact component={Blockchain} />
        <Error404></Error404>
      </Switch>
    </>
  );
};

export default App;
