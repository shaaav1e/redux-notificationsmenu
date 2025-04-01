import React from "react";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
const Notifications = () => {
  const notifications = [
    {
      text: "Notification 1",
      id: 1,
      read: false,
    },
    {
      text: "Notification 2",
      id: 2,
      read: false,
    },
    {
      text: "Notification 3",
      id: 3,
      read: true,
    },
  ];
  return (
    <div className="max-w-lg mx-auto mt-10">
      <ul className="font-bold p-4 flex flex-col gap-5">
        {notifications.map((n) => (
          <li
            className="rounded-md border-2 px-6 py-4 flex items-center justify-between"
            key={n.id}
          >
            {n.text}
            {/* {!n.read && ( */}
            <Button
              className={`${
                n.read ? "invisible" : "visible"
              } px-5.5 py-2 rounded-full`}
              size="icon"
              variant="ghost"
            >
              <Circle />
            </Button>
            {/* )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
