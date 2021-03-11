import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import { BookProvider } from './utils/GlobalState';

function App() {
  return (
    <>
      <Router>
        <Route>
          <BookProvider>
            <Route exact path='/' component={Home} />
          </BookProvider>
        </Route>
      </Router>
    </>
  );
}

export default App;
