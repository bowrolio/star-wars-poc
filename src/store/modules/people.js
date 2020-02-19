import Vue from 'vue';
import { LOAD_PEOPLE, PEOPLE_SUCCESS, PEOPLE_ERR, CHANGE_PEOPLE, SEARCH_PEOPLE } from '../actions/people';

import api from '../../api';

// Initial vue state
const state = () => ({
  people: {
    count: 0,
    next: '',
    previous: null,
    results: [],
  },
  currentPage: 0,
});

const getters = {
  count: state => state.people.count,
  people: state => state.people,
  currentPage: state => state.people.currentPage,
};

const actions = {
  [LOAD_PEOPLE]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.fetchPeople()
        .then(resp => {
          commit(PEOPLE_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(PEOPLE_ERR, err);
          reject(err);
        });
    });
  },

  [CHANGE_PEOPLE]: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      api.changePeople(payload)
        .then(resp => {
          commit(PEOPLE_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(PEOPLE_ERR, err);
          reject(err);
        });
    });
  },

  [SEARCH_PEOPLE]: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      api.searchPeople(payload)
        .then(resp => {
          commit(PEOPLE_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(PEOPLE_ERR, err);
          reject(err);
        });
    });
  },
};

const mutations = {
  [PEOPLE_SUCCESS]: (state, people) => {
    Vue.set(state, 'people', people);
  },
  [PEOPLE_ERR]: (state) => {
    Vue.set(state, 'people', false);
  },
};

// this file is NOT using NAMESPACING
export default {
  state,
  getters,
  actions,
  mutations,
};
