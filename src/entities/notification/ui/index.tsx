import { useUnit } from "effector-react";
import { $notifications, type INotification } from "../model";
import "./styled.css";

const Notification: React.FC<INotification> = ({ message, type }) => {
  return <div className={`notification notification-${type}`}>{message}</div>;
};

export const Notifications: React.FC = () => {
  const notifications = useUnit($notifications);
  return (
    <div className="notifications">
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  );
};
