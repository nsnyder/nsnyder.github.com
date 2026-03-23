<template>
  <div id="app" class="font-sans">
    <Header />
    <Resume />
    <Footer />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Footer from "~/components/Footer.vue";
  import Header from "~/components/Header.vue";
  import Resume from "~/components/Resume/Resume.vue";

  export default defineComponent({
    name: "App",

    components: {
      Footer,
      Header,
      Resume,
    },
  });
</script>

<style>
  @import "./styles/main.css";
</style>
