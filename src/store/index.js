import Vue from 'vue';
import Vuex from 'vuex';

import people from './modules/people';

import vuexSession from './sessionStorage';

// allow vue to use VueX
Vue.use(Vuex);

// register the various data with store
export default new Vuex.Store({
  plugins: [vuexSession],

  modules: {
    people,
  },

  strict: true, // catch code compile errors
});
