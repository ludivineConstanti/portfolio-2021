import { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Menu from "components/pages/Menu";
import Home from "components/pages/Home";
import Pixiji from "components/pages/Pixiji";
import Dino404 from "components/pages/Dino404";
import Blockchain from "components/pages/Blockchain";

const App = () => {
  const [color, setColor] = useState({ a: "#FFF", b: "#0e184f" });
  return (
    <div className="App">
      <Menu color={color}></Menu>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pixiji" exact component={Pixiji} />
        <Route path="/dino-404" exact component={Dino404} />
        <Route path="/an-intro-to-blockchain" exact component={Blockchain} />
      </Switch>
    </div>
  );
};

export default App;
