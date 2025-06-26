import { notificationModel } from "@/entities/notification";
import { RequestForm, requestModel } from "@/entities/requests";
import type { TStatus } from "@/entities/requests/model";
import { useUnit } from "effector-react";
import { useCallback } from "react";

export const RequestFormCreate = () => {
  const appendRequest = useUnit(requestModel.appendRequest);
  const notify = useUnit(notificationModel.appendNotification);
  const handleSubmit = useCallback(
    (formData: FormData) => {
      const request: requestModel.IRequest = {
        id: new Date().toISOString(),
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        category: {
          id: formData.get("category") as string,
          label: formData.get("category") as string,
        },
        status: formData.get("status") as TStatus,
      };
      appendRequest(request);
      notify({
        message: "Запрос успешно создан, вы будете перенаправлены на главную",
        type: "success",
      });
      setTimeout(() => {
        window.location.href = `/`;
      }, 1000);
    },
    [appendRequest, notify]
  );
  const handleCancel = () => {
    window.history.back();
  };
  return (
    <RequestForm
      onSubmitText="Создать"
      onSubmit={handleSubmit}
      onCancelText="Отменить"
      onCancel={handleCancel}
    />
  );
};
