import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Authenticated } from "@refinedev/core";
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import { CatchAllNavigate } from "@refinedev/react-router-v6";

import { Header } from "../";

export const AuthenticatedInner: FC = () => {
  return (
    <Authenticated
      key="authenticated-inner"
      fallback={<CatchAllNavigate to="/login" />}
    >
      <ThemedLayoutV2
        Header={Header}
        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
      >
        <Outlet />
      </ThemedLayoutV2>
    </Authenticated>
  );
};
