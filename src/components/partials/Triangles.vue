<template>
  <div class="absolute bottom-0 left-0 right-0">
    <div class="triangle-container">
      <div class="absolute top-0 left-0 w-full h-full">
        <div
          class="grid w-full h-full grid-cols-12 grid-rows-4 overflow-hidden pointer-events-none"
        >
          <div
            class="col-start-1 col-end-13 row-start-1 row-end-5 origin-top-right transform shadow-md -rotate-12"
            :class="{ [colorClassDark]: true }"
          />
          <div
            class="col-start-1 col-end-13 row-start-1 row-end-5 origin-top-left transform shadow-md rotate-30"
            :class="{ [colorClassLight]: true }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/composition-api";

  export default defineComponent({
    name: "Triangles",

    props: {
      colorClassLight: {
        required: true,
        type: String,
      },
      colorClassDark: {
        required: true,
        type: String,
      },
    },

    setup(props) {
      return {
        colorClassDark: props.colorClassDark,
        colorClassLight: props.colorClassLight,
      };
    },
  });
</script>

<style scoped>
  .triangle-container {
    @apply relative;

    padding-top: min(16rem, calc(100% * 1 / 4));
  }
</style>
