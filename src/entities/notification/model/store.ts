import { createStore, sample } from "effector";
import { delay } from "patronum";
import {
  appendNotification,
  appendNotificationId,
  removeNotification,
} from "./events";
import type { INotification } from "./types";

export const $notifications = createStore<(INotification & { id: string })[]>(
  []
)
  .on(appendNotification, (state, notification) => [
    ...state,
    { ...notification, id: new Date().toISOString() },
  ])
  .on(removeNotification, (state, notification) =>
    state.filter((n) => n.id !== notification.id)
  );

sample({
  clock: appendNotification,
  fn: (notification) => ({ ...notification, id: new Date().toISOString() }),
  target: appendNotificationId,
});

delay({
  source: appendNotificationId,
  timeout: 3000,
  target: removeNotification,
});
