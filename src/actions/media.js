export const SET_MEDIA = 'SET_MEDIA';
export const UPDATE_MEDIA = 'UPDATE_MEDIA';
export const REMOVE_MEDIA = 'REMOVE_MEDIA';

const set = data => {
  return {
    type: SET_MEDIA,
    data
  }
};
const add = data => {
  return {
    type: UPDATE_MEDIA,
    data
  }
};
const remove = id => {
  return {
    type: REMOVE_MEDIA,
    id
  }
};

export const setMedia = (data) => (dispatch) => {
  dispatch(set(data));
};

export const updateMedia = (data) => (dispatch) => {
  dispatch(add(data));
};

export const removeMedia = (id) => (dispatch) => {
  dispatch(remove(id));
};
