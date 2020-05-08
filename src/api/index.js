import axios from 'axios';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://hacker-news.firebaseio.com/v0',
      timeout: 1000 * 60 * 2
    })
  };

  getStories = (label) => this.instance.get(`${label}stories.json`);
  getStory = (id) => this.instance.get(`/item/${id}.json`);

  fetchData = async (label) => {
    try {
      const response = await this.getStories(label);
      const { data } = response;
      const stories = data.slice(0, 10).map(async id => {
        const res = await this.getStory(id);
        return res.data;
      });
      const result = await Promise.all(stories);
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };
}

export default Api;
