import React from "LibApp/react";

const Page1 = React.lazy(() => import("./App"));

const routes = [
  {
    path: "/page1",
    component: Page1,
  },
];

export default routes;
