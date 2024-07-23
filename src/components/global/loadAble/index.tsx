import type { FC } from "react";
import { Suspense } from "react";
import { Spin } from "antd";

const Loading: FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    }}
  >
    <Spin />
  </div>
);

export const LoadAble = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
