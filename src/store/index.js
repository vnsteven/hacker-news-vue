import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const currentStories = {
  stories: [],
  isCurrentLoading: false
};

const allStories = {
  allStories: {
    top: [],
    new: [],
    best: []
  },
  isAllLoading: false,
  dataLength: 0
};

const searchStories = {
  searchValue: '',
  isEmpty: true
};

const store = new Vuex.Store({
  state: {
    ...currentStories,
    ...allStories,
    ...searchStories
  },
  actions,
  mutations,
  getters
});

export default store;
