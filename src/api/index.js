import axios from 'axios';
import { handlePagination } from '../util';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://hacker-news.firebaseio.com/v0',
      timeout: 1000 * 60 * 2
    });
    this.dataLength = 0;
  }

  getStoriesIds = (label) => this.instance.get(`${label}stories.json`);

  getStoryItem = (id) => this.instance.get(`/item/${id}.json`);

  getStoryPromises = (data) => (
    data.map(async (id) => {
      const res = await this.getStoryItem(id);
      return res.data;
    })
  );

  fetchData = async (label, page) => {
    try {
      const { from, to } = handlePagination(page);
      const { data } = await this.getStoriesIds(label);
      this.dataLength = data.length;
      const result = await Promise.all(
        this.getStoryPromises(data.slice(from, to))
      );
      return result;
    } catch (error) {
      return console.error(error.message);
    }
  };

  fetchAll = async (label) => {
    try {
      const { data } = await this.getStoriesIds(label);
      const result = await Promise.all(
        this.getStoryPromises(data)
      );
      return result;
    } catch (error) {
      return console.error(error.message);
    }
  };

  fetchComments = async (story) => {
    try {
      const mapComments = await Promise.all(story.kids.map(async (id) => {
        const res = await this.getStoryItem(id);
        const item = await Promise.resolve(res);
        if (!item.data || !item.data.kids) return item.data;

        return this.fetchComments(item.data);
      }));
      return {
        ...story,
        kids: mapComments
      };
    } catch (error) {
      return console.error(error.message);
    }
  };
}

export default Api;
