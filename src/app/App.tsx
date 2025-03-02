import { AppRouter } from './router';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';

function App() {

  return (
    <>
      <Navbar />
      <main className='main'>
        <Sidebar />
        <AppRouter />
      </main>
    </>
  );
}

export default App;