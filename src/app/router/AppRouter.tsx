import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import { RoutePaths } from '@shared/config';

const appRoutes: Record<RoutePaths, RouteProps> = {
  [RoutePaths.main]: { path: RoutePaths.main, element: <MainPage /> },
  [RoutePaths.about]: { path: RoutePaths.about, element: <AboutPage /> },
};

const routes = Object.values(appRoutes);

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route: RouteProps) => <Route key={route.path} {...route} />)}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;