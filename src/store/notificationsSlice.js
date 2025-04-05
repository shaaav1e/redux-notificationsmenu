import { createSlice } from "@reduxjs/toolkit";

// The initial state is now only used if nothing is found in localStorage
const initialState = {
  notificationsList: [
    {
      text: "Grocery",
      id: 1,
      read: false,
    },
    {
      text: "Coding",
      id: 2,
      read: false,
    },
    {
      text: "Gym",
      id: 3,
      read: false,
    },
  ],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.notificationsList.find(
        (n) => n.id === action.payload
      );
      if (notification) {
        notification.read = true;
      }
    },
    markAsUnread: (state, action) => {
      const notification = state.notificationsList.find(
        (n) => n.id === action.payload
      );
      if (notification) {
        notification.read = false;
      }
    },
    addNotification: (state, action) => {
      state.notificationsList.push({
        ...action.payload,
        id: Date.now(), // Simple way to generate unique IDs
        read: false,
      });
    },
    clearAllNotifications: (state) => {
      state.notificationsList = [];
    },
  },
});

// Export actions
export const {
  markAsRead,
  markAsUnread,
  addNotification,
  clearAllNotifications,
} = notificationsSlice.actions;

// Export selector
export const selectNotifications = (state) =>
  state.notifications.notificationsList;

export default notificationsSlice.reducer;
