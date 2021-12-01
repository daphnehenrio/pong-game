import { applyMiddleware } from 'redux';
import loggers from './loggers';

export default applyMiddleware(
  loggers,
);
