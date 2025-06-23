import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import { RoutePaths } from '@shared/config/router';

const appRoutes: RouteProps[] = [
  { path: RoutePaths.main, element: <MainPage /> },
  { path: RoutePaths.about, element: <AboutPage /> },
];

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {appRoutes.map((route: RouteProps) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
