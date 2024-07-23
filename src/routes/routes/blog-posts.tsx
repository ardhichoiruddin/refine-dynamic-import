import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { LoadAble } from "../../components/global";

const BlogPostList = LoadAble(
  lazy(() => import("../../pages/blog-posts/list"))
);
const BlogPostCreate = LoadAble(
  lazy(() => import("../../pages/blog-posts/create"))
);
const BlogPostEdit = LoadAble(
  lazy(() => import("../../pages/blog-posts/edit"))
);
const BlogPostShow = LoadAble(
  lazy(() => import("../../pages/blog-posts/show"))
);

const blogPost = [
  {
    path: "",
    element: <BlogPostList />,
  },
  {
    path: "create",
    element: <BlogPostCreate />,
  },
  {
    path: "edit/:id",
    element: <BlogPostEdit />,
  },
  {
    path: "show/:id",
    element: <BlogPostShow />,
  },
] as RouteObject[];

export default blogPost;
