import { applyMiddleware } from 'redux';
import loggers from './loggers';
import scores from './scores';

export default applyMiddleware(
  loggers,
  scores,
);
