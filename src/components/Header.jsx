import React from "react";
import NotificationsButton from "./NotificationsButton";
const Header = () => {
  return (
    <header className="px-2 py-2 flex justify-between h-12 bg-slate-900 items-center">
      <span className="font-bold text-2xl">Redux Notifications.</span>
      <NotificationsButton />
    </header>
  );
};

export default Header;
