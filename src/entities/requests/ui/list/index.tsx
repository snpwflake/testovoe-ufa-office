import type { IRequest } from "../../model";
import { RequestItem } from "../item";
import { createElement } from "react";
import "./styled.css";

type RequestsListProps = {
  requests: IRequest[];
  deleteButton: React.FC<{ id: IRequest["id"] }>;
};
export const RequestsList: React.FC<RequestsListProps> = ({
  requests,
  deleteButton,
}) => {
  return (
    <div className="requests-list">
      {requests.map((request, index) => (
        <RequestItem
          deleteButton={createElement(deleteButton, { id: request.id })}
          key={request.id + index}
          request={request}
        />
      ))}
    </div>
  );
};
