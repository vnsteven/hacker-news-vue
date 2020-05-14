import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const currentStories = {
  stories: [],
  isCurrentLoading: false,
  dataLength: 0
};

const allStories = {
  allStories: {
    top: [],
    new: [],
    best: []
  },
  isAllLoading: false
};

const storyComments = {
  comments: [],
  isCommentLoading: false
};

const searchStories = {
  searchValue: '',
  isEmpty: true
};

const user = {
  user: null,
  userStories: [],
  isUserLoading: false
};

const store = new Vuex.Store({
  state: {
    ...currentStories,
    ...allStories,
    ...storyComments,
    ...searchStories,
    ...user
  },
  actions,
  mutations,
  getters
});

export default store;
