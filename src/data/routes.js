export const routes = {
  home: { text: "Home", path: "/", color: "#1A2755" },
  project1: { text: "Pixiji", path: "/pixiji", color: "#002A51" },
  project2: { text: "Dino 404", path: "/dino-404", color: "#4285F4" },
  project3: {
    text: "Blockchain",
    path: "/an-intro-to-blockchain",
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
