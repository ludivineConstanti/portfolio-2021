# Materials and colors 🎨

![color_planet_1](https://user-images.githubusercontent.com/24965333/118279973-08450080-b4cc-11eb-8acc-b8b8160efc72.png)
I made the concept for the planet (that represents Paris) in Blender, and then exported it.

![color_planet_2](https://user-images.githubusercontent.com/24965333/118282992-2829f380-b4cf-11eb-8df7-3323991426c7.jpg)

I used matCaps to make it better for performance, the colors are given by an other map, thanks to the model's UV. 
I used a white and blue matcap, since I think black / grey shadows are too harsh, 
but that didn't work out well, since the entire model is affected by one material, it looks fine on the white / blue colors, 
but the pink part looks like it has a strange filter, as if it's under water 🤿

![color_planet_3](https://user-images.githubusercontent.com/24965333/118282045-26abfb80-b4ce-11eb-8a5d-22cdb31062d1.jpg)

I tried again with a white / grey matcap, just in case, but it's not much better, the colors look very desaturated 📺

![color_planet_4](https://user-images.githubusercontent.com/24965333/118282078-2f9ccd00-b4ce-11eb-985d-49ac9e2c56ba.jpg)

I then decided to use individual matcaps based on the colors. Instead of importing the planet as one mesh, 
I import meshes separately that I all add to a group, I can then give one material per mesh. This allows much more saturated colors. By trying various material, 
I thought the reflecting one looked good on the geometrical shapes that symbolize trees 🌳 so I also separated them to give them a special matcap.
I also added some reflection for the water 🌊
