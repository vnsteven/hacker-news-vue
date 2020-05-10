export default {
  getPageCount(state) {
    return Math.floor(state.dataLength / 10);
  }
};
