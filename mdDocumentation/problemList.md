# Problem list 🔍

## 📚 Use more libraries? Or not?

When I googled "react three.js" I found out there was a library called "react-three-fiber" that makes it a lot easier to use 3D inside of React. I decided to not use it, since I already have some code done in three.js, that I did not want to rewrite. Also, I think more documentation is available for three.js, which makes a lot of difference. It doesn't matter if a library is very easy to use, if it's difficult to find the causes for a bug. Plus it can make things more difficult sometimes, to understand the inner mechanics.

That being said, I might try to use it at some point, since it probably make a lot of things more practical. For example, I find making the link between my Three.js code and the React components quite awkward sometimes (I have a state that should be able to be updated by both the three.js code and the react component for the Dino 404 game, I didn't know how to do it, with just useState, so in the end I used redux for it). And also to load the components and remove them when switching to an other page.

## 🐱‍🐉 Transfering Dino 404 to the portfolio

Since I don't have any deployed version of the remake of the google game that I made, I thought I can simply copy-paste its code in this portfolio (and show it directly there so that I have less websites to deploy).

Also, I wanted to use the matcap materials to make it more performant and I couldn't in the original project, since I didn't use any bundler, I couldn't load any picture. The matcaps materials change the colors a lot, but it also makes a lot of difference for performance, so I let them in.

The 3D model of the Dino somehow got automatically converted to buffer geometry instead of the geometry it was using (I am not sure why, maybe because I used the three.js package this time, instead of copy pasting the three.js file that is on github, directly in my project). Which means I had to redo the code where I modify the position of its vertices.
