import { Route, Switch } from "react-router-dom";

import "./App.css";
// Pages
import Dino404 from "./components/pages/Dino404";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/project/dino-404" exact component={Home} />
        <Route path="/" exact component={Dino404} />
      </Switch>
    </div>
  );
};

export default App;
