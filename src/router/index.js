/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import Layout from "../pages/components/Layout";
import Test from "../pages/Test";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routers = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "test",
        component: Test,
      },
      {
        path: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routers;
