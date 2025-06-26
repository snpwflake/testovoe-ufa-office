import { requestModel } from "@/entities/requests";
import { fork } from "effector";
import { Provider } from "effector-react";
import type { PropsWithChildren } from "react";

const requests = localStorage.getItem("requests");
const scope = fork({
  values: [[requestModel.$requests, requests ? JSON.parse(requests) : []]],
});

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider value={scope}>{children}</Provider>;
};
