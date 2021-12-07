// ? Import npm
import React from 'react';
// | <Switch> component was replaced by <Routes> in react-router v6
import { Route, Routes } from 'react-router';

// ? Import components
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
