import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/react-router-v6";

export const AuthenticatedOuter: FC = () => {
  return (
    <Authenticated key="authenticated-outer" fallback={<Outlet />}>
      <NavigateToResource />
    </Authenticated>
  );
};
