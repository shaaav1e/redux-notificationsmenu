import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
const NotificationsButton = () => {
  return (
    <Button className="relative px-5.5 py-2" variant="outline" size="icon">
      <Bell className="!w-4 !h-4" />
      <span className=" absolute top-0 right-0 text-sm">20</span>
    </Button>
  );
};

export default NotificationsButton;
