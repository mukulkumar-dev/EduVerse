import { createSlice } from '@reduxjs/toolkit';

// Get saved login state from localStorage
const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: storedIsLoggedIn, // Load state from localStorage
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", "true"); // Save state to localStorage
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem("isLoggedIn"); // Clear state on logout
        }
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
