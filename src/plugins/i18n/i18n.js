import Vue from 'vue';
import VueI18n from 'vue-i18n';

// use the Vuei18n library with Vue
Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('../../locales/en.json'),
  },
});
