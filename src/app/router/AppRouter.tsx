import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import { RoutePaths } from '@shared/config/router';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PageLoader } from '@features/PageLoader';

const appRoutes: Record<RoutePaths, RouteProps> = {
  [RoutePaths.main]: { path: RoutePaths.main, element: <MainPage /> },
  [RoutePaths.about]: { path: RoutePaths.about, element: <AboutPage /> },
  [RoutePaths.notFound]: {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
  },
};

const routes = Object.values(appRoutes);

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map((route: RouteProps) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
