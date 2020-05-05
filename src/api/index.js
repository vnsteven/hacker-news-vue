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
}

export default Api;
