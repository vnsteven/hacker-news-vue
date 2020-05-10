export default {
  UPDATE_DATA: (state, { data }) => {
    state.stories = data;
  },

  UPDATE_DATA_LENGTH: (state, { length }) => {
    state.dataLength = length;
  },

  SET_LOADING: (state) => {
    state.isLoading = true;
  },

  RESET_LOADING: (state) => {
    state.isLoading = false;
  }
};
