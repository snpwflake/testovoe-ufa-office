import { createStore, sample } from "effector";
import { REQUESTS_EXAMPLES } from "../lib";
import type { IRequest } from "./types";
import { appendRequest, removeRequest, updateRequest } from "./events";
import { appendRequestFx, removeRequestFx, updateRequestFx } from "./effects";

export const $requests = createStore<IRequest[]>(REQUESTS_EXAMPLES)
  .on(appendRequest, (state, request) => [...state, request])
  .on(removeRequest, (state, id) =>
    state.filter((request) => request.id !== id)
  )
  .on(updateRequest, (state, request) =>
    state.map((r) => (r.id === request.id ? { ...r, ...request } : r))
  );

sample({
  clock: appendRequest,
  target: appendRequestFx,
});

sample({
  clock: removeRequest,
  target: removeRequestFx,
});

sample({
  clock: updateRequest,
  target: updateRequestFx,
});
