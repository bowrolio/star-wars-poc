import axios from './axios';

export default {

  fetchPeople () {
    return axios.get('https://swapi.co/api/people')
      .then(response => response.data);
  },

  changePeople (payload) {
    return axios.get('https://swapi.co/api/people/?page=' + payload.page)
      .then(response => response.data);
  },

  searchPeople (payload) {
    return axios.get('https://swapi.co/api/people/?search=' + payload.name)
      .then(response => response.data);
  },
};
