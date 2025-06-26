import { requestModel } from "@/entities/requests";
import { RequestEdit } from "@/widgets/requests";
import { useUnit } from "effector-react";
import { useParams } from "react-router-dom";

export const RequestSlugPage = () => {
  const { id } = useParams();
  const requests = useUnit(requestModel.$requests);
  const request = requests.find((request) => request.id === id);

  if (!request) {
    return <div>Запрос не найден</div>;
  }

  return <RequestEdit {...request} />;
};
