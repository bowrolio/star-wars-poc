<template>
  <div class="pagination">
    <b-pagination
      v-model="currentPage"
      :total-rows="people.count"
      :per-page="perPage"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { CHANGE_PEOPLE } from '../../store/actions/people';

export default {
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      totalItems: 100,
    };
  },
  computed: {
    ...mapGetters(['people']),
  },
  watch: {
    currentPage: {
      handler: function () {
        this.$store.dispatch(CHANGE_PEOPLE, { page: this.currentPage });
      },
    },
  },
};
</script>
