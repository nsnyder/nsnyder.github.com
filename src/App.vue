<template>
  <div id="app" class="font-sans">
    <Header />
    <Resume />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Navigation from './components/Navigation.vue';
  import Resume from '~/components/Resume.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Navigation, // eslint-disable-line vue/no-unused-components
      Resume
    }
  };
</script>

<style>
  @import './styles/main.css';
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>
