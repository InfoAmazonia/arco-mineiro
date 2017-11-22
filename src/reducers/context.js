import {
  CONTEXT_UPDATE
} from 'actions/context';

import {
  REHYDRATE
} from 'redux-persist';

const initialState = {
  storyScroll: {},
  storyHeight: {},
  scrollHistory: {
    lastKey: undefined
  }
};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case CONTEXT_UPDATE : {
      state = Object.assign({}, initialState, state, {
        [action.context]:
          (typeof action.data == 'object' ? {
            ...state[action.context],
            ...action.data
          } : action.data)
      });
      return state;
    }
    case REHYDRATE : {
      const incoming = {...action.payload.context};
      delete incoming.scrollHistory;
      return {
        ...state,
        ...incoming,
        rehydrated: true
      }
    }
    default : {
      return state;
    }
  }
};
