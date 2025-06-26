import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "./providers";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
