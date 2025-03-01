import { Link } from 'react-router-dom';
import { useTheme } from '@shared/hooks';
import { AppRouter } from './router';

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
      <AppRouter />
    </div>
  );
}

export default App;