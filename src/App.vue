<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import './styles/main.css';
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>
