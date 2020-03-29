<template>
  <div id="app" class="bg-red-500">
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

</style>
