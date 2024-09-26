import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
      user: null,
      error: null,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      clearUser: (state) => {
        state.user = null;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
});

export const { setUser, clearUser, setError, clearError} = userSlice.actions;
export default userSlice.reducer;
