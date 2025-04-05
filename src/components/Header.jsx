import React from "react";
import NotificationsButton from "./NotificationsButton";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAppDispatch } from "../store/hooks";
import { addNotification } from "../store/notificationsSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const addQuickNotification = () => {
    const randomText = `Quick Note ${Math.floor(Math.random() * 1000)}`;
    dispatch(addNotification({ text: randomText }));
  };

  return (
    <header className="px-4 py-2 flex justify-between h-12 bg-slate-900 items-center">
      <span className="font-bold text-2xl">Redux Notifications.</span>
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          onClick={addQuickNotification}
          className="flex items-center gap-1"
        >
          <Plus className="w-3 h-3" /> Quick Add
        </Button>
        <NotificationsButton />
      </div>
    </header>
  );
};

export default Header;
