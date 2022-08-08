import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import './styles/main.css';

// Create a react-query client
const queryClient = new QueryClient();

// Start mock service worker in dev environment
async function startMockServiceWorker() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    await worker.start();
    worker.printHandlers();
  }
}

startMockServiceWorker().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  );
});

// -----------------------------------------------------------------------------
// If you don't use Mock Service Worker, simplify the above code as shown below.
// -----------------------------------------------------------------------------
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );
