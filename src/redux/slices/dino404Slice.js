import { createSlice } from "@reduxjs/toolkit";

export const dino404Slice = createSlice({
  name: "dino404",
  initialState: {
    gameState: "init",
  },

  reducers: {
    updateValDino404: (state, { payload }) => {
      // the action prop will always have to be an object formatted as such
      // {prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      // This way, I can change multiple values
      for (let i = 0; i < payload.prop.length; i += 1) {
        state[payload.prop[i]] = payload.value[i];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValDino404 } = dino404Slice.actions;

export default dino404Slice.reducer;
