import { notificationModel } from "@/entities/notification";
import { RequestForm, requestModel } from "@/entities/requests";
import { useUnit } from "effector-react";
import { useCallback } from "react";

type RequestFormEditProps = {
  request: requestModel.IRequest;
};

export const RequestFormEdit: React.FC<RequestFormEditProps> = ({
  request,
}) => {
  const updateRequest = useUnit(requestModel.updateRequest);
  const notify = useUnit(notificationModel.appendNotification);
  const handleSubmit = useCallback(
    (formData: FormData) => {
      const updatedRequest: requestModel.IRequest = {
        ...request,
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        updatedAt: new Date().toISOString(),
        category: {
          id: formData.get("category") as string,
          label: formData.get("category") as string,
        },
        status: formData.get("status") as requestModel.TStatus,
      };
      updateRequest(updatedRequest);
      notify({
        message: "Запрос успешно изменён, вы будете перенаправлены на главную",
        type: "success",
      });
      setTimeout(() => {
        window.location.href = `/`;
      }, 1000);
    },
    [updateRequest, notify, request]
  );
  const handleCancel = () => {
    window.history.back();
  };
  return (
    <RequestForm
      defaultValues={request}
      onSubmitText="Изменить"
      onSubmit={handleSubmit}
      onCancelText="Отменить"
      onCancel={handleCancel}
    />
  );
};
