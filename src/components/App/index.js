// ? Import npm
import React from 'react';
import { Route, Routes } from 'react-router';

// ? Import
import Home from '../Home';
import Scores from '../Scores';

// ? Import styles
import './styles.scss';

// ? Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/scores" element={<Scores />} />
      <Route>
        404
      </Route>
    </Routes>
  </div>
);

// ? Export
export default App;
