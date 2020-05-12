import Api from 'api';

const api = new Api();

export default {
  FETCH_DATA: async ({ commit, dispatch }, { path, page }) => {
    commit('SET_CURRENT_LOADING');
    const data = await api.fetchData(path, parseInt(page, 10));
    commit('UPDATE_DATA', { data });
    dispatch('FETCH_DATA_LENGTH');
    commit('RESET_CURRENT_LOADING');
  },

  FETCH_DATA_LENGTH: ({ commit }) => {
    const length = api.dataLength;
    commit('UPDATE_DATA_LENGTH', { length });
  },

  FETCH_ALL: async ({ commit }, { label }) => {
    commit('SET_ALL_LOADING');
    const data = await api.fetchAll(label);
    commit('UPDATE_ALL', { data, label });
    commit('RESET_ALL_LOADING');
  },

  FETCH_COMMENTS: async ({ commit }, { story }) => {
    commit('SET_COMMENT_LOADING');
    const data = await api.fetchComments(story);
    commit('UPDATE_STORY_COMMENTS', { data });
    commit('RESET_COMMENT_LOADING');
  }
};
