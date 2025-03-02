import { AppRouter } from './router';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Navbar />
      <main className='main'>
        <Sidebar/>
        <AppRouter/>
      </main>
    </Suspense>
  );
}

export default App;