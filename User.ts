import { createSlice } from "@reduxjs/toolkit";

interface userSliceType {
  username: string;
}
const intistate: userSliceType = {
  username: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: intistate,
  reducers: {
    updateName(state = intistate, action) {
      state.username = action.payload;
    },
    clearName(state = intistate) {
      state.username = "";
    },
  },
});
export const { updateName, clearName } = userSlice.actions;
export default userSlice.reducer;
