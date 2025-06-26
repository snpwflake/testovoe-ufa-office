import { RequestFormCreate } from "@/features/requests";
import { Section } from "@/shared/components";
import "./styled.css";

export const RequestCreate = () => {
  return (
    <Section>
      <div className="request-create">
        <RequestFormCreate />
      </div>
    </Section>
  );
};
