import { compose, createStore } from 'redux';

// Import local
import middlewares from './middlewares';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// On utilise une fonction utilitaire fournie par l'extension Redux DevTools
// pour venir « pimper » notre store.
const enhancers = composeEnhancers(middlewares);

const store = createStore(rootReducer, enhancers);

export default store;
