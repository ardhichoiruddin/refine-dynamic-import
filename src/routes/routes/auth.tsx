import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { LoadAble } from "../../components/global";

const Register = LoadAble(lazy(() => import("../../pages/register")));
const Login = LoadAble(lazy(() => import("../../pages/login")));
const ForgotPassword = LoadAble(
  lazy(() => import("../../pages/forgotPassword"))
);

const auth = [
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
] as RouteObject[];

export default auth;
