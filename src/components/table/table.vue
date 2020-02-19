<template>
  <div class="table">
    <b-table stacked :items="data" :fields="fields" :per-page="0" />
  </div>
</template>

<script>
import i18n from '../../plugins/i18n';

export default {
  props: {
    data: Array,
  },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: i18n.t('Table.name'),
          sortable: true,
        },
        {
          key: 'height',
          label: i18n.t('Table.height'),
        },
        {
          key: 'mass',
          label: i18n.t('Table.mass'),
        },
        {
          key: 'hair_color',
          label: i18n.t('Table.hairColor'),
        },
        {
          key: 'eye_color',
          label: i18n.t('Table.eyeColor'),
        },
        {
          key: 'birth_year',
          label: i18n.t('Table.birthYear'),
        }, {
          key: 'gender',
          label: i18n.t('Table.gender'),
        }, {
          key: 'homeworld',
          label: i18n.t('Table.homeworld'),
        },
      ],
    };
  },
};
</script>
