import { createEffect } from "effector";
import type { IRequest } from "./types";

export const appendRequestFx = createEffect<IRequest, void>({
  handler: (request) => {
    const requests = localStorage.getItem("requests");
    try {
      if (requests) {
        localStorage.setItem(
          "requests",
          JSON.stringify([...JSON.parse(requests), request])
        );
      } else {
        localStorage.setItem("requests", JSON.stringify([request]));
      }
    } catch (error) {
      console.error(error);
    }
  },
});

export const removeRequestFx = createEffect<IRequest["id"], void>({
  handler: (id) => {
    const requests = localStorage.getItem("requests");
    try {
      if (requests) {
        localStorage.setItem(
          "requests",
          JSON.stringify(
            JSON.parse(requests).filter(
              (request: IRequest) => request.id !== id
            )
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  },
});

export const updateRequestFx = createEffect<IRequest, void>({
  handler: (request) => {
    const requests = localStorage.getItem("requests");
    try {
      if (requests) {
        localStorage.setItem(
          "requests",
          JSON.stringify(
            JSON.parse(requests).map((r: IRequest) =>
              r.id === request.id ? request : r
            )
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  },
});
