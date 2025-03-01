import { useTheme } from '@shared/hooks';
import { AppRouter } from './router';
import { Navbar } from '@widgets/Navbar';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Navbar />
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
}

export default App;