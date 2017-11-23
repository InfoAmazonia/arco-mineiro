export const SET_MEDIA = 'SET_MEDIA';

const update = (context, data) => {
  return {
    type: SET_MEDIA,
    data
  }
};

export const updateContext = (data) => (dispatch) => {
  dispatch(update(data));
};
