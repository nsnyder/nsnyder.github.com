<template>
  <div id="app" class="font-sans">
    <Header />
    <Resume />
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';
  import Navigation from './components/Navigation';
  import Resume from '~/components/Resume';

  export default {
    name: 'App',
    components: {
      Footer,
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
