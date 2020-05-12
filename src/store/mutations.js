export default {
  UPDATE_DATA: (state, { data }) => {
    state.stories = data;
  },

  UPDATE_DATA_LENGTH: (state, { length }) => {
    state.dataLength = length;
  },

  SET_CURRENT_LOADING: (state) => {
    state.isCurrentLoading = true;
  },

  RESET_CURRENT_LOADING: (state) => {
    state.isCurrentLoading = false;
  },

  SET_ALL_LOADING: (state) => {
    state.isAllLoading = true;
  },

  RESET_ALL_LOADING: (state) => {
    state.isAllLoading = false;
  },

  UPDATE_ALL: (state, { data, label }) => {
    state.allStories[label] = data;
  },

  UPDATE_SEARCH_VALUE: (state, { value }) => {
    state.searchValue = value;
    state.isEmpty = !state.searchValue.length;
  },

  UPDATE_STORY_COMMENTS: (state, { data }) => {
    state.comments = data.kids;
  },

  SET_COMMENT_LOADING: (state) => {
    state.isCommentLoading = true;
  },

  RESET_COMMENT_LOADING: (state) => {
    state.isCommentLoading = false;
  }
};
