import { notificationModel } from "@/entities/notification";
import { requestModel } from "@/entities/requests";
import type { IRequest } from "@/entities/requests/model";
import { Button } from "@/shared/components";
import { useUnit } from "effector-react";

export const DeleteRequest: React.FC<{ id: IRequest["id"] }> = ({ id }) => {
  const handleDelete = useUnit(requestModel.removeRequest);
  const notify = useUnit(notificationModel.appendNotification);
  const handleClick = () => {
    handleDelete(id);
    notify({
      message: "Заявка успешно удалена",
      type: "success",
    });
  };

  return <Button onClick={handleClick}>Удалить заявку</Button>;
};
