import { combineReducers } from 'redux';
import context from './context';
import media from './media';
import { routerReducer } from 'react-router-redux';

export default {
  context,
  media,
  router: routerReducer
};
// export default function () {
//   return combineReducers({
//     router: routerReducer
//   });
// }
