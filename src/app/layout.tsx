import { Notifications } from "@/entities/notification";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Notifications />
    </>
  );
};
