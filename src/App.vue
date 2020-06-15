<template>
  <div id="app" class="font-sans grid-cols-main">
    <Header />
    <Resume />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Footer from "~/components/Footer.vue";
  import Header from "~/components/Header.vue";
  import Resume from "~/components/Resume/Resume.vue";

  export default Vue.extend({
    name: "App",

    components: {
      Footer,
      Header,
      Resume,
    },

    props: {},
  });
</script>

<style>
  @import "./styles/main.css";
</style>
