import React from 'react';
import { BookProvider } from './utils/GlobalState';
import Index from './pages/Index';

function App() {
  return (
    <>
      <BookProvider>
        <Index />
      </BookProvider>
    </>
  );
}

export default App;
