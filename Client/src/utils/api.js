import Axios from 'axios';

const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`;
const APIKEY = 'AIzaSyCRK9JtXfrmZsyeAw2jJy4W2NJq7cYaZU4';

export default {
  getBooks: (query) => {
    return Axios.get(BASEURL + query +'+intitle:' + query + '&key=' + APIKEY);
  }
};

