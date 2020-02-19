<template>
  <div class="people">
    <Search />
    <Pagination />
    <Table :data="people.results" />

  </div>
</template>

<script>
import { LOAD_PEOPLE } from '../../store/actions/people';
import { mapGetters } from 'vuex';
import Search from '../../components/search';
import Pagination from '../../components/pagination';
import Table from '../../components/table';

export default {
  components: {
    Search,
    Pagination,
    Table,
  },

  computed: {
    ...mapGetters(['people']),
  },

  created () {
    this.$store.dispatch(LOAD_PEOPLE);
  },
};
</script>
