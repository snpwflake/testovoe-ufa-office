import { requestModel, RequestsEmpty, RequestsList } from "@/entities/requests";
import { CreateRequest, DeleteRequest } from "@/features/requests";
import { Section } from "@/shared/components";
import { useUnit } from "effector-react";
import "./styled.css";

export const RequestSection: React.FC = () => {
  const requests = useUnit(requestModel.$requests);
  return (
    <Section>
      <div className="requests-header">
        <h2>Заявки</h2>
        <CreateRequest />
      </div>

      {!!requests.length && (
        <RequestsList deleteButton={DeleteRequest} requests={requests} />
      )}
      {!requests.length && <RequestsEmpty />}
    </Section>
  );
};
