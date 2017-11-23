import {
  SET_MEDIA
} from 'actions/media';

const initialState = {
  type: 'video',
  data: {
    sources: [
      'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny.ogv'
    ]
  }
};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case SET_MEDIA : {
      state = Object.assign({}, initialState, state);
      return state;
    }
    default : {
      return state;
    }
  }
};
