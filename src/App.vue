<template>
  <div id="app" class="font-sans">
    <PageHeader />
    <MyResume />
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
  import PageFooter from "~/components/PageFooter.vue";
  import PageHeader from "~/components/PageHeader.vue";
  import MyResume from "~/components/Resume/MyResume.vue";
</script>

<style>
  @import "./styles/main.css";
</style>
