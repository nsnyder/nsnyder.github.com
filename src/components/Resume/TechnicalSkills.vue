<template>
  <div class="section-constrained">
    <!-- TODO: Pick a great font for headings. -->
    <h2 class="pt-0 pb-2 text-xl font-bold">
      Technical Skills
    </h2>
    <div
      ref="grid"
      class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(entry, index) in technicalEntries"
        :key="index"
        class="p-2 px-4 rounded shadow-sm bg-gradient-shades-of-gray"
      >
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
          <li v-for="(bullet, bulletIndex) in entry.bullets" :key="bulletIndex">
            {{ bullet }}
          </li>
        </ul>
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

  export default defineComponent({
    name: "TechnicalSkills",

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
