import VuexPersistence from 'vuex-persist';
import { LOAD_PEOPLE, PEOPLE_ERR, PEOPLE_SUCCESS, CHANGE_PEOPLE, SEARCH_PEOPLE } from './actions/people';

// localStorage state and mutations
const sessMutations = [
  LOAD_PEOPLE,
  PEOPLE_ERR,
  PEOPLE_SUCCESS,
  CHANGE_PEOPLE,
  SEARCH_PEOPLE,
];

export const config = {
  storage: window.sessionStorage,
  reducer: state => ({
    people: state.people,
  }),
  filter: mutation => sessMutations.includes(mutation.type),
};

export default new VuexPersistence(config).plugin;
