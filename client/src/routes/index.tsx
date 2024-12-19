import { size } from "lodash";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const HomeStay = lazy(() => import("../pages/HomeStay/HomeStay"));

interface TRoute {
  path: string;
  element: any;
  layout?: any;
  subRoutes?: TRoute[];
}

const routes: TRoute[] = [
  {
    path: "/",
    element: Home,
    layout: DefaultLayout,
  },
  {
    path: "/rooms/:id",
    element: HomeStay,
    layout: DefaultLayout,
  },
];

const renderRouter = (props: {
  routes: TRoute[] | undefined;
  pathPrefix?: string;
}): React.ReactElement => {
  const { routes, pathPrefix } = props;
  return (
    <React.Fragment>
      {routes?.map((route: TRoute, index: number): React.ReactElement => {
        const Layout = route.layout || React.Fragment;
        const Page = route.element;
        const path = route.path === "*" ? "*" : (pathPrefix ?? "") + route.path;
        return (
          <React.Fragment key={index}>
            <Route
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
            {size(route?.subRoutes) > 0 &&
              renderRouter({ routes: route.subRoutes, pathPrefix: path })}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const MainRoutes = (): React.ReactElement => {
  return (
    <Routes>
      {renderRouter({
        routes,
        pathPrefix: "",
      })}
    </Routes>
  );
};

export default MainRoutes;
