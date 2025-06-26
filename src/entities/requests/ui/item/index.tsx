import { Badge } from "@/shared/components";
import { formatDate } from "@/shared/lib";
import { statusTransform } from "../../lib";
import type { IRequest } from "../../model";
import "./styled.css";

type RequestItemProps = {
  request: IRequest;
  onClick?: () => void;
  deleteButton?: React.ReactNode;
};

export const RequestItem: React.FC<RequestItemProps> = ({
  request,
  onClick,
  deleteButton,
}) => {
  return (
    <div className="request-item" onClick={onClick}>
      <div className="request-item__header">
        <p className="request-item__title">{request.title}</p>
        <Badge variant={statusTransform(request.status)}>
          {request.status}
        </Badge>
      </div>
      <p className="request-item__description">{request.description}</p>
      <div className="request-item__footer">
        <p className="request-item__createdAt">
          Дата создания: {formatDate(request.createdAt)}
        </p>
        <div className="request-item__actions">
          <a href={`/requests/${request.id}`} className="request-item__edit">
            Редактировать
          </a>
          {deleteButton}
        </div>
      </div>
    </div>
  );
};
