import { Section } from "@/shared/components";
import { RequestFormEdit } from "@/features/requests";
import type { IRequest } from "@/entities/requests/model";
import "./styled.css";

export const RequestEdit: React.FC<IRequest> = (props) => {
  return (
    <Section>
      <div className="request-edit">
        <RequestFormEdit request={props} />
      </div>
    </Section>
  );
};
