import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "./router/index";
const renderRouters = (routers) => {
  const renderedRouter = routers.map((routes) => {
    const needRenderChildren = routes.children && routes.children.length > 0;
    const RenderComponet = routes.component;
    return (
      <Route path={routes.path} element={<RenderComponet />} key={routes.path}>
        {needRenderChildren && renderRouters(routes.children)}
      </Route>
    );
  });
  return renderedRouter;
};
console.log("renderedRouter(routers)", renderRouters(routers));
const App = () => (
  <BrowserRouter>
    <Routes>{renderRouters(routers)}</Routes>
  </BrowserRouter>
);
export default App;
