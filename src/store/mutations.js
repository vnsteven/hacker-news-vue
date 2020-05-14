const storiesData = {
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
  }
};

const allStories = {
  SET_ALL_LOADING: (state) => {
    state.isAllLoading = true;
  },

  RESET_ALL_LOADING: (state) => {
    state.isAllLoading = false;
  },

  UPDATE_ALL: (state, { data, label }) => {
    state.allStories[label] = data;
  }
};

const search = {
  UPDATE_SEARCH_VALUE: (state, { value }) => {
    state.searchValue = value;
    state.isEmpty = !state.searchValue.length;
  }
};

const comments = {
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

const currentUser = {
  SET_USER_LOADING: (state) => {
    state.isUserLoading = true;
  },

  RESET_USER_LOADING: (state) => {
    state.isUserLoading = false;
  },

  UPDATE_USER: (state, { user, stories }) => {
    state.user = user;
    state.userStories = stories;
  }
};

export default {
  ...storiesData,
  ...allStories,
  ...search,
  ...comments,
  ...currentUser
};
