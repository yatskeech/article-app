import { AppRouter } from './router';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, ThemeProvider } from './providers';
import { ErrorPage } from '@pages/ErrorPage';
import { PageLoader } from '@features/PageLoader';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorPage />}>
        <ThemeProvider>
          <Suspense fallback={<PageLoader />}>
            <Navbar />
            <main className="main">
              <Sidebar />
              <AppRouter />
            </main>
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
