import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { LoadAble } from "../../components/global";

const CategoryList = LoadAble(
  lazy(() => import("../../pages/categories/list"))
);
const CategoryCreate = LoadAble(
  lazy(() => import("../../pages/categories/create"))
);
const CategoryEdit = LoadAble(
  lazy(() => import("../../pages/categories/edit"))
);
const CategoryShow = LoadAble(
  lazy(() => import("../../pages/categories/show"))
);

const categories = [
  {
    path: "",
    element: <CategoryList />,
  },
  {
    path: "create",
    element: <CategoryCreate />,
  },
  {
    path: "edit/:id",
    element: <CategoryEdit />,
  },
  {
    path: "show/:id",
    element: <CategoryShow />,
  },
] as RouteObject[];

export default categories;
