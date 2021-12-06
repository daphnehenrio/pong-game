// ? Import npm
import React from 'react';
import { Route, Routes } from 'react-router';

// ? Import
import Home from '../Home';
import Scores from '../Scores';
import NotFound from '../NotFound';

// ? Import styles
import './styles.scss';

// ? Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/scores" element={<Scores />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

// ? Export
export default App;
