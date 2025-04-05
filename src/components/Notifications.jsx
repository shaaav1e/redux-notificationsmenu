import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Circle, Plus, Trash2, RefreshCw } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  selectNotifications,
  markAsRead,
  markAsUnread,
  addNotification,
  clearAllNotifications,
} from "../store/notificationsSlice";

const Notifications = () => {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();
  const [newNotificationText, setNewNotificationText] = useState("");

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  const handleMarkAsUnread = (id) => {
    dispatch(markAsUnread(id));
  };

  const handleAddNotification = (e) => {
    e.preventDefault();
    if (newNotificationText.trim()) {
      dispatch(addNotification({ text: newNotificationText }));
      setNewNotificationText("");
    }
  };

  const handleClearAll = () => {
    dispatch(clearAllNotifications());
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="mb-6 p-4 bg-slate-800 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Notification Controls</h2>

        {/* Add new notification form */}
        <form onSubmit={handleAddNotification} className="flex gap-2 mb-4">
          <input
            type="text"
            value={newNotificationText}
            onChange={(e) => setNewNotificationText(e.target.value)}
            placeholder="Enter new notification..."
            className="flex-1 px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
          />
          <Button type="submit" className="flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add
          </Button>
        </form>

        {/* Clear all button */}
        <Button
          onClick={handleClearAll}
          variant="destructive"
          className="flex items-center gap-1"
          disabled={notifications.length === 0}
        >
          <Trash2 className="w-4 h-4" /> Clear All
        </Button>
      </div>

      <h2 className="text-xl font-bold p-4">Your Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-center p-8 text-gray-400">
          No notifications to display
        </p>
      ) : (
        <ul className="font-bold p-4 flex flex-col gap-5">
          {notifications.map((n) => (
            <li
              className="rounded-md border-2 px-6 py-4 flex items-center justify-between"
              key={n.id}
            >
              <div className="flex items-center">
                <span className={n.read ? "text-gray-500" : ""}>{n.text}</span>
                {n.read && (
                  <span className="ml-2 text-xs text-green-500">(read)</span>
                )}
              </div>

              {/* Show different buttons based on read status */}
              {n.read ? (
                <Button
                  className="px-5.5 py-2 rounded-full"
                  size="icon"
                  variant="outline"
                  onClick={() => handleMarkAsUnread(n.id)}
                  title="Mark as unread"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  className="px-5.5 py-2 rounded-full"
                  size="icon"
                  variant="ghost"
                  onClick={() => handleMarkAsRead(n.id)}
                  title="Mark as read"
                >
                  <Circle />
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
