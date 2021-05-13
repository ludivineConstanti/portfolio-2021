import Home from "components/pages/Home";
import Pixiji from "components/pages/Pixiji";
import Dino404 from "components/pages/Dino404";
import Blockchain from "components/pages/Blockchain";

export const routes = {
  home: { text: "Home", path: "/", component: Home, color: "#1A2755" },
  project1: {
    text: "Pixiji",
    path: "/pixiji",
    component: Pixiji,
    pathCode: "https://github.com/ludivineConstanti/Pixiji",
    pathWebsite: "https://pixiji.surge.sh/",
    color: "#002A51",
  },
  project2: {
    text: "Dino 404",
    path: "/dino-404",
    component: Dino404,
    pathCode: "https://github.com/ludivineConstanti/dino-404",
    pathWebsite: "/dino-404",
    color: "#4285F4",
  },
  project3: {
    text: "Blockchain",
    path: "/an-intro-to-blockchain",
    component: Blockchain,
    pathCode: "https://github.com/ludivineConstanti/an-intro-to-Blockchain",
    pathWebsite: "https://blockchain-apotheose.surge.sh/",
    color: "#000",
  },
};

export const routesKeys = Object.keys(routes);

export const prevNextLinks = (number) => {
  const arr = [];
  if (routes[`project${number - 1}`]) {
    arr.push({
      useCase: "prev",
      path: routes[`project${number - 1}`].path,
      grid: { cStart: 1 },
      direction: "left",
    });
  }
  if (routes[`project${number + 1}`]) {
    arr.push({
      useCase: "next",
      path: routes[`project${number + 1}`].path,
      grid: { cStart: 3 },
    });
  }
  return arr;
};
