# Problem list 🔍

## 📚 Use more libraries? Or not?

When I googled "react three.js" I found out there was a library called "react-three-fiber" that makes it a lot easier to use 3D inside of React. I am trying to see if it would be worth using or not.

## 🐱‍🐉 Transfering Dino 404 to the portfolio

Since I don't have any deployed version of the remake of the google game that I made, I thought I can simply copy-paste its code in this portfolio (and show it directly there so that I have less websites to deploy). Also, I wanted to use the matcap materials to make it more performant and I couldn't in the original project, since I didn't use any bundler, I couldn't load any picture.

The 3D model of the Dino somehow got automatically converted to buffer geometry instead of the geometry it was using (I am not sure why, maybe because I used the three.js package this time, instead of copy pasting the three.js file that is on github, directly in my project). Which means I had to redo the code where I modify the position of its vertices.
