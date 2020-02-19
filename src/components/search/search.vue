<template>
  <div class="search">
    <b-form-input v-model="searchQuery"
                  :placeholder="$t('Search.placeholder')"
                  @input="isTyping = true"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import { LOAD_PEOPLE, SEARCH_PEOPLE } from '../../store/actions/people';

export default {
  props: {
    data: Array,
  },
  data () {
    return {
      searchQuery: '',
    };
  },
  watch: {
    searchQuery: _.debounce(function () {
      if (this.searchQuery) {
        this.$store.dispatch(SEARCH_PEOPLE, { name: this.searchQuery });
      } else {
        this.$store.dispatch(LOAD_PEOPLE);
      }
    }, 1000),
  },
};
</script>
