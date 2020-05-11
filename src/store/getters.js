import { formatPath } from '../util';

export default {
  getPageCount(state) {
    return Math.floor(state.dataLength / 10);
  },

  getSearchResult: (state) => (path) => {
    const { allStories, searchValue } = state;
    const label = formatPath(path);

    return allStories[label].filter(({ title }) => (
      title.toLowerCase().includes(searchValue.toLowerCase())
    ));
  }
};
