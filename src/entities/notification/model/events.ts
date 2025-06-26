import { createEvent } from "effector";
import type { INotification } from "./types";

export const appendNotificationId = createEvent<
  INotification & { id: string }
>();

export const appendNotification = createEvent<INotification>();

export const removeNotification = createEvent<INotification & { id: string }>();
