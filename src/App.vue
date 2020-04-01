<template>
  <div id="app" class="font-sans">
    <Navigation />
    <Header />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Navigation from './components/Navigation.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Navigation
    }
  };
</script>

<style>
  @import './styles/main.css';
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>
