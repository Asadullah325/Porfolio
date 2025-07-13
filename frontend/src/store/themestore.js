import { createSlice } from "@reduxjs/toolkit";

// Load theme from localStorage or default to "light"
const initialTheme = "light";

const themeStore = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeStore.actions;
export default themeStore.reducer;
