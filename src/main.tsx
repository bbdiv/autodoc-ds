import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemeProvider } from "@components/ThemeProvider/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      <ThemeProvider>
        <App />
      </ThemeProvider>
    }
  </StrictMode>,
);

export { default as Button } from "./components/Button";
export { default as Input } from "./components/Input";
