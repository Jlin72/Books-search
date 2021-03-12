import Axios from 'axios';

const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`;
const APIKEY = 'AIzaSyCRK9JtXfrmZsyeAw2jJy4W2NJq7cYaZU4';

//eslint-disable-next-line
export default {
  getBooks: (query) => {
    return Axios.get(BASEURL + query +'+intitle:' + query + '&key=' + APIKEY);
  },
  saveToFavorites: (book) => {
    return Axios.post('/api/book/', book);
  },
  getFavorites: () => {
    return Axios.get('/api/book');
  },
  removeFromFavorites: (id) => {
    return Axios.delete(`api/book/${id}`)
  }
};

