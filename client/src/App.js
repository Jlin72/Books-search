import React from 'react';
import { BookProvider } from './utils/GlobalState';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <>
    <Router>
      <BookProvider>
        <Route exact path='/' component={Index} />
      </BookProvider>
    </Router>
    </>
  );
}

export default App;
