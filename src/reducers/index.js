import { combineReducers } from 'redux';
import context from './context';
import media from './media';
import mediaLibrary from './mediaLibrary';
import { routerReducer } from 'react-router-redux';

export default {
  context,
  media,
  mediaLibrary,
  router: routerReducer
};
// export default function () {
//   return combineReducers({
//     router: routerReducer
//   });
// }
