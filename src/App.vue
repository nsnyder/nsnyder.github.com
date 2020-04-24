<template>
  <div id="app" class="font-sans">
    <Header />
    <Resume />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "~/components/Resume";

export default Vue.extend({
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
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
</style>
