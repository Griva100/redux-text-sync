import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a Redux slice (state + reducers)
const inputSlice = createSlice({
  name: "input",
  initialState: { value: "" },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload; // Update state when user types
    },
  },
});

// Export actions and reducer
export const { setInputValue } = inputSlice.actions;
export const store = configureStore({ reducer: { input: inputSlice.reducer } });
