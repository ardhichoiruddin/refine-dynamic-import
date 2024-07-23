// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ErrorComponent } from "@refinedev/antd";

import {
  RefineProvider,
  AuthenticatedOuter,
  AuthenticatedInner,
} from "../components/global";
import blogPost from "./routes/blog-posts";
import categories from "./routes/categories";
import auth from "./routes/auth";

const router = createBrowserRouter([
  {
    Component: RefineProvider,
    children: [
      {
        path: "",
        element: <Navigate to="/blog-posts" replace={true} />,
      },
      {
        Component: AuthenticatedOuter,
        children: auth,
      },
      {
        Component: AuthenticatedInner,
        children: [
          {
            path: "blog-posts",
            children: blogPost,
          },
          {
            path: "categories",
            children: categories,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorComponent />,
      },
    ],
  },
]);

export default router;
