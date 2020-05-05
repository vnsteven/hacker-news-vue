import Api from 'api';

const api = new Api();

export const fetchData = async () => {
  try {
    const response = await api.getTopStories();
    const { data } = response;
    const stories = data.slice(0, 10).map(async id => {
      const res = await api.getStory(id);
      return res.data;
    });
    const result = await Promise.all(stories);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
