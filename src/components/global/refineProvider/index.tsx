import type { FC } from "react";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { useNotificationProvider } from "@refinedev/antd";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { RefineKbar } from "@refinedev/kbar";
import { Outlet } from "react-router-dom";

import { authProvider } from "../../../authProvider";
import resources from "./resources";

export const RefineProvider: FC = () => {
  return (
    <DevtoolsProvider>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={useNotificationProvider}
        routerProvider={routerBindings}
        authProvider={authProvider}
        resources={resources}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "Qck6eP-bfuxlg-NF2i8N",
        }}
      >
        <Outlet />
        <RefineKbar />
        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
      <DevtoolsPanel />
    </DevtoolsProvider>
  );
};
