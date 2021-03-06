<template>
  <div class="grid-cols-main">
    <!-- TODO: Pick a great font for headings. -->
    <div class="text-xl font-bold lg:text-right grid-sidebar">
      <h2 class="mt-4 skew-label">
        Technical Skills
      </h2>
    </div>

    <!-- TODO: Adapt this to fit with the larger grid structure better. -->
    <div
      ref="grid"
      class="grid grid-cols-1 gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 grid-content"
    >
      <div
        v-for="(entry, index) in technicalEntries"
        :key="index"
        class="relative overflow-hidden bg-gray-100 rounded shadow-sm"
      >
        <triangles
          color-class-light="bg-gray-200"
          color-class-dark="bg-gray-300"
        />
        <div class="relative p-2 px-4">
          <div class="mb-2">
            <h3 class="text-lg font-bold text-gray-800">
              {{ entry.title }}
            </h3>
          </div>
          <ul
            class="duration-1000 transform"
            :class="{
              'opacity-0 -translate-x-4': index > visibleElementsCount - 1,
            }"
          >
            <li
              v-for="(bullet, bulletIndex) in entry.bullets"
              :key="bulletIndex"
            >
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    computed,
    ref,
  } from "@vue/composition-api";
  import useStaggeredGridReveal from "~/mixins/useStaggeredGridReveal";
  import Triangles from "~/components/partials/Triangles.vue";

  export default defineComponent({
    name: "TechnicalSkills",

    components: {
      Triangles,
    },

    props: {},

    setup() {
      const technicalEntries = ref([
        {
          title: "Frontend Technologies",
          bullets: [
            "HTML5",
            "CSS3",
            "Javascript",
            "VueJS",
            "VueX",
            "Sass CSS",
            "npm",
          ],
        },
        {
          title: "Backend Technologies",
          bullets: ["PHP", "C#", "Laravel", "SQL Server"],
        },
        {
          title: "Concepts and Tools",
          bullets: [
            "Agile Development",
            "MVC Patterns",
            "Object Oriented Programming",
            "Git Version Control",
            "PHP Storm",
            "Visual Studio Code",
          ],
        },
      ]);

      const visibleElementsCount = ref(0);
      const entriesCount = computed(() => technicalEntries.value.length);

      // Mixin.
      const grid = ref<HTMLElement>(null);
      const { observeGrid } = useStaggeredGridReveal();

      onMounted(() => observeGrid(grid, visibleElementsCount, entriesCount));

      return {
        grid,
        technicalEntries,
        visibleElementsCount,
      };
    },
  });
</script>
