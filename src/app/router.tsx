import { createBrowserRouter } from "react-router-dom";
import { RequestPage } from "@/pages/request";
import { RequestNewPage } from "@/pages/request-new";
import { AppLayout } from "./layout";
import { RequestSlugPage } from "@/pages/request-slug";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <RequestPage />,
      },
      {
        path: "/requests",
        children: [
          {
            index: true,
            element: <RequestPage />,
          },
          {
            path: "new",
            element: <RequestNewPage />,
          },
          {
            path: ":id",
            element: <RequestSlugPage />,
          },
        ],
      },
      {
        path: "*",
        element: null,
      },
    ],
  },
]);
