// Local storage key for notifications
export const NOTIFICATIONS_STORAGE_KEY = "redux-notifications-state";

// Load state from localStorage
// This function is typically called when initializing your Redux store
// It will retrieve previously saved state even after page refreshes
export const loadState = () => {
  try {
    // This retrieves data that persists across page refreshes
    const serializedState = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    if (serializedState === null) {
      return undefined; // If no state in localStorage, return undefined so reducer initializes state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

// Save state to localStorage
// This function should be called whenever the state changes that you want to persist
// The saved state will be available after page refreshes
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

import { saveState } from "../../utils/localStorage";

// Export a function to setup persistence
export const setupNotificationsPersistence = (store) => {
  store.subscribe(() => {
    const state = store.getState();
    saveState(state.notifications); // Adjust based on your state structure
  });
};
