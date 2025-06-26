export type TStatus = "pending" | "approved" | "rejected";

export interface IRequestCategory {
  id: string;
  label: string;
}

export interface IRequest {
  id: string;
  title: string;
  description: string;
  status: TStatus;
  category: IRequestCategory;
  createdAt: string;
  updatedAt: string;
}
