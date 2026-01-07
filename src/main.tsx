import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DndContext } from "@dnd-kit/core";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DndContext>
      <App />
    </DndContext>
  </StrictMode>
);
