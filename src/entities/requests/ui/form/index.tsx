import { Button, Input, SelectField, Textarea } from "@/shared/components";
import { CATEGORIES, STATUS } from "../../lib";
import { useCallback } from "react";
import "./styled.css";
import { useUnit } from "effector-react";
import { notificationModel } from "@/entities/notification";
import type { IRequest } from "../../model";

type RequestFormProps = {
  onSubmit: (formData: FormData) => void;
  onSubmitText: string;
  onCancel: () => void;
  onCancelText: string;
  defaultValues?: IRequest;
};
export const RequestForm: React.FC<RequestFormProps> = ({
  onSubmit,
  onSubmitText,
  onCancel,
  onCancelText,
  defaultValues,
}) => {
  const notify = useUnit(notificationModel.appendNotification);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const formData = new FormData(e.currentTarget);
      if (formData.get("title") === "") {
        notify({
          message: "Заголовок не может быть пустым",
          type: "error",
        });
        return;
      }
      onSubmit(formData);
    },
    [onSubmit, notify]
  );

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <Input
        defaultValue={defaultValues?.title}
        name="title"
        label="Заголовок"
      />
      <Textarea
        defaultValue={defaultValues?.description}
        name="description"
        label="Описание"
      />
      <SelectField
        defaultValue={defaultValues?.category.id}
        name="category"
        options={CATEGORIES}
        label="Категория"
      />
      <SelectField
        name="status"
        defaultValue={defaultValues?.status}
        options={STATUS.map((status) => ({ id: status, label: status }))}
        label="Статус"
      />
      <div className="request-form__buttons">
        <Button type="submit">{onSubmitText}</Button>
        <Button type="button" onClick={onCancel}>
          {onCancelText}
        </Button>
      </div>
    </form>
  );
};
