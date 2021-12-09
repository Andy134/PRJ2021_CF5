import React, { lazy } from "react";
// import Elements from "./pages/Elements";
// import Home from "./pages/Home";
// import Page400 from "./pages/P404";
// import Page500 from "./pages/P500";

const Elements = lazy(() => import("./pages/Elements"));
const Home = lazy(() => import("./pages/Home"));
const Page500 = lazy(() => import("./pages/P500"));
const Page404 = lazy(() => import("./pages/P404"));

export const routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/500", component: <Page500 /> },
  { path: "/element", component: <Elements /> },
  { path: "/*", component: <Page404 /> },
];
