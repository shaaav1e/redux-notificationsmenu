import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "./notificationsSlice";
import { loadState, saveState } from "../utils/localStorage";
import throttle from "lodash/throttle";

// Load persisted state from localStorage
const persistedState = loadState();

// Create the Redux store with the persisted state
export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
  // Use preloaded state from localStorage if available
  preloadedState: persistedState,
});

// Subscribe to store changes and save to localStorage
// Using throttle to limit how often we write to localStorage
store.subscribe(
  throttle(() => {
    saveState({
      notifications: store.getState().notifications,
    });
  }, 1000)
);
