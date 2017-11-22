import { combineReducers } from 'redux';
import context from './context';
import { routerReducer } from 'react-router-redux';

export default {
  context,
  router: routerReducer
};
// export default function () {
//   return combineReducers({
//     router: routerReducer
//   });
// }
