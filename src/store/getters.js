export default {
  getPageCount(state) {
    return Math.floor(state.dataLength / 10);
  },

  getSearchResult: (state) => (path) => {
    const { allStories, searchValue } = state;
    const label = path.replace(/\//, '');

    return allStories[label].filter(({ title }) => (
      title.toLowerCase().includes(searchValue.toLowerCase())
    ));
  }
};
