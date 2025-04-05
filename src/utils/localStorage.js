// Local storage key for notifications
export const NOTIFICATIONS_STORAGE_KEY = "redux-notifications-state";

// Load state from localStorage
// This function is typically called when initializing your Redux store
// It will retrieve previously saved state even after page refreshes
export const loadState = () => {
  try {
    // This retrieves data that persists across page refreshes
    const serializedState = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    console.log("Loading state from localStorage:", serializedState);
    if (serializedState === null) {
      return undefined; // If no state in localStorage, return undefined so reducer initializes state
    }
    const parsedState = JSON.parse(serializedState);
    console.log("Parsed state:", parsedState);
    return parsedState;
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
    console.log("Saving state to localStorage:", state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};
