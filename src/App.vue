<template>
  <div id="app" class="font-sans">
    <Header />
    <Resume />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Footer from "~/components/Footer.vue";
  import Header from "~/components/Header.vue";
  import Resume from "~/components/Resume.vue";

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
