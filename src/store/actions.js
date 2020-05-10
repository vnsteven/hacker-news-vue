import Api from 'api';

const api = new Api();

export default {
  FETCH_DATA: async ({ commit, dispatch }, { path, page }) => {
    commit('SET_LOADING');
    const data = await api.fetchData(path, parseInt(page, 10));
    commit('UPDATE_DATA', { data });
    dispatch('FETCH_DATA_LENGTH');
    commit('RESET_LOADING');
  },

  FETCH_DATA_LENGTH: ({ commit }) => {
    const length = api.dataLength;
    commit('UPDATE_DATA_LENGTH', { length });
  }
};
