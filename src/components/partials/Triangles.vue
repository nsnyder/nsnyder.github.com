<template>
  <div
    class="absolute bottom-0 grid w-full h-64 grid-cols-4 grid-rows-4 overflow-hidden pointer-events-none md:grid-cols-12 tri"
  >
    <div
      class="col-start-2 col-end-13 row-start-3 row-end-5 origin-top-right transform shadow-md -rotate-12 md:row-start-2 lg:row-start-1"
      :class="{ [colorClassDark]: true }"
    />
    <div
      class="col-start-1 col-end-13 row-start-3 row-end-5 origin-top-left transform shadow-md md:row-start-2 rotate-30 lg:row-start-1"
      :class="{ [colorClassLight]: true }"
    />
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
