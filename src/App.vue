<template>
  <div id="app">
    <component :is="getLayout">
      <router-view />
    </component>
  </div>
</template>

<script>
const layout = 'default-layout';

export default {
  computed: {
    getLayout () {
      return layout;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
