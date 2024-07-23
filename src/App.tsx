import { GitHubBanner } from "@refinedev/core";
import { RefineKbarProvider } from "@refinedev/kbar";

import "@refinedev/antd/dist/reset.css";

import { App as AntdApp } from "antd";
import { RouterProvider } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import router from "./routes";

function App() {
  return (
    <>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <RouterProvider router={router} />
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </>
  );
}

export default App;
