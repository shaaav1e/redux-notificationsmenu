import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useAppSelector } from "../store/hooks";
import { selectNotifications } from "../store/notificationsSlice";

const NotificationsButton = () => {
  const notifications = useAppSelector(selectNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Button className="relative px-5.5 py-2" variant="outline" size="icon">
      <Bell className="!w-4 !h-4" />
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </Button>
  );
};

export default NotificationsButton;
