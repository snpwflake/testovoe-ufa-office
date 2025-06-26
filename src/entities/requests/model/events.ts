import { createEvent } from "effector";
import type { IRequest } from "./types";

export const appendRequest = createEvent<IRequest>();

export const removeRequest = createEvent<IRequest["id"]>();

export const updateRequest = createEvent<IRequest>();
