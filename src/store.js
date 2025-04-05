import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Your reducers
import { loadState, saveState } from "./utils/localStorage";
import throttle from "lodash/throttle"; // Optional but recommended

// Load previous state from localStorage
const persistedState = loadState();

// Create the store with the persisted state
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState, // Initialize with saved state
});

// Save state to localStorage whenever store changes
store.subscribe(
  throttle(() => {
    const state = store.getState();

    // Save the ENTIRE state - this is often safer if you're not sure about structure
    saveState(state);

    // If you want to save only notifications, make sure your structure matches
    // saveState(state.notifications);
  }, 1000)
);

export default store;
