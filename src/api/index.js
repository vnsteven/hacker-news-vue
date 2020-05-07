import axios from 'axios';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://hacker-news.firebaseio.com/v0/',
      timeout: 1000 * 60 * 2
    })
  };

  getTopStories = () => this.instance.get('topstories.json');
  getStory = (id) => this.instance.get(`item/${id}.json`);

  fetchData = async () => {
    try {
      const response = await this.getTopStories();
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
