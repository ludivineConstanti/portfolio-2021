import { createSlice } from "@reduxjs/toolkit";
import { arrIlluRabbitOnMoon } from "components/pages/Pixiji/RabbitOnMoon/dataIllu";
import { arrIlluCloudDragon } from "components/pages/Pixiji/CloudDragon/dataIllu";

export const pixijiSlice = createSlice({
  name: "pixiji",
  initialState: {
    rabbitOnMoon: {
      currentKanjis: arrIlluRabbitOnMoon.withKanjis,
      withKanjis: arrIlluRabbitOnMoon.withKanjis,
      withoutKanjis: arrIlluRabbitOnMoon.withoutKanjis,
      currentNum: arrIlluRabbitOnMoon.withoutKanjis.length,
      totalNum: arrIlluRabbitOnMoon.withoutKanjis.length,
    },
    cloudDragon: {
      currentKanjis: arrIlluCloudDragon.withKanjis,
      withKanjis: arrIlluCloudDragon.withKanjis,
      withoutKanjis: arrIlluCloudDragon.withoutKanjis,
      currentNum: arrIlluCloudDragon.withoutKanjis.length,
      totalNum: arrIlluCloudDragon.withoutKanjis.length,
    },
  },

  reducers: {
    updateArrIllu: (state, { payload }) => {
      // payload = name of the component
      state[payload].currentNum += 1;
      if (state[payload].currentNum > state[payload].totalNum) {
        state[payload].currentNum = 0;
      }
      state[payload].currentKanjis = [
        ...state[payload].withKanjis.slice(0, state[payload].currentNum),
        ...state[payload].withoutKanjis.slice(state[payload].currentNum),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateArrIllu } = pixijiSlice.actions;

export default pixijiSlice.reducer;
