<template>
  <div>
    <Experience />
    <TechnicalSkills />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/composition-api";
  import Experience from "./Experience.vue";
  import TechnicalSkills from "./TechnicalSkills.vue";

  export default defineComponent({
    name: "Resume",

    components: {
      Experience,
      TechnicalSkills,
    },

    props: {},

    setup() {
      //
    },
  });
</script>
