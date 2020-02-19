<template>
  <div class="container">
    <Header />
    <div class="layout-default">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header';
import Footer from '../components/footer';

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  .layout-default {
    position: relative;
    min-height: 250px;
    padding-top: 20px;
  }
</style>
