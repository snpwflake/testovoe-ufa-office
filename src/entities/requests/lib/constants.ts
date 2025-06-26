import type { IRequest, IRequestCategory, TStatus } from "../model";

export const CATEGORIES: IRequestCategory[] = [
  { id: "1", label: "Срочная" },
  { id: "2", label: "Обычная" },
  { id: "3", label: "Важная" },
];

export const STATUS: TStatus[] = ["pending", "approved", "rejected"];

export const REQUESTS_EXAMPLES: IRequest[] = [
  {
    id: "1",
    updatedAt: new Date().toISOString(),
    title: "Задача 1",
    category: CATEGORIES[0],
    description: "Lorem ipsum dolor sit amet",
    status: "approved",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    updatedAt: new Date().toISOString(),
    title: "Задача 2",
    category: CATEGORIES[1],
    description: "Lorem ipsum dolor sit amet",
    status: "pending",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    updatedAt: new Date().toISOString(),
    title: "Задача 3",
    category: CATEGORIES[2],
    description: "Lorem ipsum dolor sit amet",
    status: "rejected",
    createdAt: new Date().toISOString(),
  },
];
