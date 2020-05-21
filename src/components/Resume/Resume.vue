<template>
  <div>
    <Experience />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/composition-api";
  import Experience from "./Experience.vue";

  export default defineComponent({
    name: "Resume",

    components: {
      Experience,
    },

    props: {},

    setup() {
      //
    },
  });
</script>
