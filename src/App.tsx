import { Routes, Route, Link } from 'react-router-dom';
import MainPageLazy from './pages/MainPage/MainPage.lazy';
import AboutPageLazy from './pages/AboutPage/AboutPage.lazy';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';

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
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;