import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from '@shared/hooks';
import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
      </div>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;